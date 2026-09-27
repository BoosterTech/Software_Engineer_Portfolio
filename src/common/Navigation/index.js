import DarkModeToggle from "common/DarkModeToggle";
import { useLanguage } from "common/LanguageProvider";
import { LanguageSwitch } from "common/LanguageSwitch";
import ShareButton from "common/ShareButton";
import ShareMenuItem from "common/ShareButton/ShareMenuItem";
import useContent from "common/useContent";
import { useMediaQuery } from "common/useMediaQuery";
import { useScrollSpy } from "common/useScrollSpy";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Link } from "react-scroll";
import { themes } from "themes";

import { HamburgerIcon } from "./HamburgerIcon";
import { menuItems } from "./menuItems";
import {
  ActivePill,
  DevWrapper,
  HamburgerButton,
  ItemLabel,
  MenuContainer,
  MobileMenuBackdrop,
  MobileNavItem,
  MobileMenuPanel,
  StyledList,
  StyledListItem,
  StyledScrollLink,
  TopRow,
} from "./styled";

const COMPACT_MAX_PX = parseInt(themes.breakpoint.xl2, 10) - 1;
const DESKTOP_MIN_PX = parseInt(themes.breakpoint.lg, 10);
const SECTION_IDS = menuItems.English.map((item) => item.slug);

const Navigation = () => {
  const { language } = useLanguage();
  const { nav } = useContent();
  const activeId = useScrollSpy(SECTION_IDS);
  const shouldReduceMotion = useReducedMotion();

  const isCompact = useMediaQuery(`(max-width: ${COMPACT_MAX_PX}px)`);
  const isMobile = useMediaQuery(`(max-width: ${themes.breakpoint.md})`);
  const isDesktopNav = useMediaQuery(`(min-width: ${DESKTOP_MIN_PX}px)`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      if (document.body.style.position === "fixed") {
        ticking = false;
        return;
      }
      if (window.innerWidth >= DESKTOP_MIN_PX) {
        setHidden(false);
        ticking = false;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      if (currentY < 10) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastScrollY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateNavHeight = () => {
      const height = nav.offsetHeight;
      document.documentElement.style.setProperty(
        "--nav-height-actual",
        `${height}px`
      );
    };

    updateNavHeight();

    const ro = new ResizeObserver(updateNavHeight);
    ro.observe(nav);

    window.addEventListener("resize", updateNavHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_MIN_PX}px)`);
    const handler = () => setIsMenuOpen(false);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const getOffset = (item) =>
    isMobile && item.offsetMobile != null ? item.offsetMobile : item.offset;

  const getIcon = (item) => {
    switch (item) {
      case "home":
        return <FaHome />;
      case "about":
        return <FaUser />;
      case "projects":
        return <FaProjectDiagram />;
      case "contact":
        return <FaEnvelope />;
      default:
        return null;
    }
  };

  return (
    <StyledList
      ref={navRef}
      className={hidden ? "nav-hidden" : ""}
      aria-label={nav.mainAriaLabel}
    >
      <TopRow>
        <LanguageSwitch onOpen={() => setIsMenuOpen(false)} />
        {isDesktopNav && <ShareButton />}
        <DarkModeToggle />
      </TopRow>
      <Link
        href="#home"
        to={menuItems[language][0].slug}
        smooth={true}
        offset={menuItems[language][0].offset}
        duration={700}
        key={1}
        onClick={handleClick}
      >
        <DevWrapper>
          <span>Derek.dev</span>
        </DevWrapper>
      </Link>

      <MenuContainer data-testid="desktop-menu">
        {menuItems[language].map((item, index) => {
          return (
            <StyledScrollLink
              className={activeId === item.slug ? "active" : undefined}
              data-testid={`nav-link-${item.slug}`}
              href={`#${item.slug}`}
              to={item.slug}
              smooth={true}
              offset={getOffset(item)}
              duration={700}
              key={index}
            >
              <StyledListItem key={index}>
                {activeId === item.slug && (
                  <ActivePill
                    layoutId={shouldReduceMotion ? undefined : "nav-pill"}
                  />
                )}
                <ItemLabel>
                  {isCompact ? getIcon(item.slug) : item.name}
                </ItemLabel>
              </StyledListItem>
            </StyledScrollLink>
          );
        })}
      </MenuContainer>
      <HamburgerButton
        ref={hamburgerRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={nav.menuToggleLabel}
        aria-expanded={isMenuOpen}
      >
        <HamburgerIcon $open={isMenuOpen} />
      </HamburgerButton>
      <MobileMenuBackdrop
        className={isMenuOpen ? "open" : ""}
        onClick={() => setIsMenuOpen(false)}
      />
      <MobileMenuPanel
        className={isMenuOpen ? "open" : ""}
        data-testid="mobile-menu"
      >
        {menuItems[language].map((item, index) => {
          return (
            <MobileNavItem
              className={activeId === item.slug ? "active" : undefined}
              href={`#${item.slug}`}
              to={item.slug}
              smooth={true}
              offset={getOffset(item)}
              duration={700}
              key={index}
              onClick={() => setIsMenuOpen(false)}
            >
              {getIcon(item.slug)}
              {item.name}
            </MobileNavItem>
          );
        })}
        <ShareMenuItem />
      </MobileMenuPanel>
    </StyledList>
  );
};

export default Navigation;
