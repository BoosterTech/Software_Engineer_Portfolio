import { useLanguage } from "common/LanguageProvider";
import { menuItems } from "common/Navigation/menuItems";
import { useThemeMode } from "common/ThemeModeProvider";
import useContent from "common/useContent";
import { useMediaQuery } from "common/useMediaQuery";
import { FaArrowRight, FaFileAlt, FaStar } from "react-icons/fa";
import { themes } from "themes";

import {
  WelcomeLabel,
  HeroTitle,
  GradientText,
  TechStackText,
  HeroDescription,
  ButtonsContainer,
  ViewMyWorkButton,
  DownloadCVButton,
} from "./heroStyles";
import {
  ContentImageContainer,
  HomeWrapper,
  ImageContainer,
  ContentContainer,
  ProfileImage,
} from "./homeStyles";
import TalkingPortrait from "./TalkingPortrait";
import { ToolsShowcase } from "./ToolsShowcase";

const profileImage = `${import.meta.env.BASE_URL}profileImage.webp`;
const lightProfileImage = `${import.meta.env.BASE_URL}light_theme_profile.webp`;

const Home = ({ id }) => {
  const { home } = useContent();
  const { language } = useLanguage();
  const { isDark } = useThemeMode();

  const projectsItem = menuItems[language][2];
  const isMobile = useMediaQuery(`(max-width: ${themes.breakpoint.md})`);
  const projectsOffset =
    isMobile && projectsItem.offsetMobile != null
      ? projectsItem.offsetMobile
      : projectsItem.offset;

  return (
    <HomeWrapper id={id}>
      <ContentImageContainer>
        <ContentContainer>
          <WelcomeLabel>
            <FaStar />
            {home.welcomeLabel}
          </WelcomeLabel>
          <HeroTitle>
            {home.contentHeaderPlain}{" "}
            <GradientText data-text={home.contentHeaderAccent}>
              {home.contentHeaderAccent}
            </GradientText>
          </HeroTitle>
          <TechStackText>{home.contentHeaderTechStack}</TechStackText>

          <HeroDescription>{home.headerParagraph}</HeroDescription>
          <ButtonsContainer>
            <ViewMyWorkButton
              to={projectsItem.slug}
              href={`#${projectsItem.slug}`}
              smooth={true}
              offset={projectsOffset}
              duration={700}
            >
              {home.viewMyWork}
              <FaArrowRight />
            </ViewMyWorkButton>
            <DownloadCVButton
              $variant="outline"
              href={home.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {home.viewCV}
              <FaFileAlt />
            </DownloadCVButton>
          </ButtonsContainer>
        </ContentContainer>
        <ImageContainer>
          <ProfileImage
            ref={(el) => el?.setAttribute("fetchpriority", "high")}
            src={isDark ? profileImage : lightProfileImage}
            alt={home.portraitAlt}
            width={640}
            height={640}
          />
          <TalkingPortrait poster={profileImage} />
        </ImageContainer>
      </ContentImageContainer>

      <ToolsShowcase />
    </HomeWrapper>
  );
};

export default Home;
