import { useLanguage } from "common/LanguageProvider";
import { menuItems } from "common/Navigation/menuItems";
import useContent from "common/useContent";
import projects from "content/projects";
import { AnimatePresence } from "framer-motion";
import gitHubIcon from "images/gitHubIcon.webp";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import CarouselSlide from "./CarouselSlide";
import ProjectModal from "./ProjectModal";
import {
  CarouselButton,
  DragLayer,
  Header,
  NavDot,
  NavDots,
  ProjectIcon,
  ProjectsTrack,
  ProjectsWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";

const Projects = ({ id }) => {
  const { projects: projectsContent } = useContent();
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const expandedProject =
    expandedIndex !== null ? projects[expandedIndex] : null;
  const dragMoved = useRef(false);
  const expandTriggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (navigator.connection?.saveData) return;
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const prefetch = () =>
      projects.forEach((p) => {
        if (p.modalImageURL) new Image().src = p.modalImageURL;
      });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        if ("requestIdleCallback" in window) requestIdleCallback(prefetch);
        else prefetch();
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (index) => setActiveIndex(index);
  const handlePrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));

  const handleDrag = (_, info) => {
    if (Math.abs(info.offset.x) > 8) dragMoved.current = true;
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    if (Math.abs(offset.x) > Math.abs(offset.y)) {
      if (offset.x < -60 || velocity.x < -400) {
        handleNext();
      } else if (offset.x > 60 || velocity.x > 400) {
        handlePrev();
      }
    }
    setTimeout(() => {
      dragMoved.current = false;
    }, 150);
  };

  const handleKeyDown = (e) => {
    if (expandedIndex !== null) return;
    if (e.key === "ArrowLeft" && activeIndex > 0) {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight" && activeIndex < projects.length - 1) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <Wrapper id={id} ref={sectionRef}>
      <TitleWrapper>
        <a
          href="https://github.com/BoosterTech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={projectsContent.githubProfileLabel}
        >
          <ProjectIcon src={gitHubIcon} alt="" />
        </a>
        <Header
          $lang={language}
          data-text={projectsContent.header}
          aria-label={menuItems[language][2].name}
        >
          {projectsContent.header}
        </Header>
      </TitleWrapper>
      <ProjectsWrapper
        role="region"
        aria-label={projectsContent.regionLabel}
        onKeyDown={handleKeyDown}
      >
        {activeIndex > 0 && (
          <CarouselButton
            $left
            onClick={handlePrev}
            aria-label={projectsContent.previousLabel}
          >
            <FiChevronLeft />
          </CarouselButton>
        )}
        <DragLayer
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          dragMomentum={false}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          <ProjectsTrack style={{ "--active-index": activeIndex }}>
            {projects.map((project, index) => {
              const position =
                index === activeIndex
                  ? "center"
                  : index < activeIndex
                    ? "left"
                    : "right";

              return (
                <CarouselSlide
                  key={project.title.English}
                  project={project}
                  isActive={index === activeIndex}
                  position={position}
                  onClick={() => {
                    if (!dragMoved.current) handleSelect(index);
                  }}
                  onExpand={(trigger) => {
                    if (!dragMoved.current) {
                      expandTriggerRef.current = trigger;
                      setExpandedIndex(index);
                    }
                  }}
                />
              );
            })}
          </ProjectsTrack>
        </DragLayer>
        {activeIndex < projects.length - 1 && (
          <CarouselButton
            onClick={handleNext}
            aria-label={projectsContent.nextLabel}
          >
            <FiChevronRight />
          </CarouselButton>
        )}
      </ProjectsWrapper>
      <NavDots>
        {projects.map((_, index) => (
          <NavDot
            key={index}
            $active={index === activeIndex}
            onClick={() => handleSelect(index)}
            aria-label={`${projectsContent.goToLabel} ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </NavDots>
      <AnimatePresence>
        {expandedProject && (
          <ProjectModal
            project={expandedProject}
            onClose={() => setExpandedIndex(null)}
            onPrev={() => setExpandedIndex((i) => Math.max(0, i - 1))}
            onNext={() =>
              setExpandedIndex((i) => Math.min(projects.length - 1, i + 1))
            }
            hasPrev={expandedIndex > 0}
            hasNext={expandedIndex < projects.length - 1}
            returnFocusRef={expandTriggerRef}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Projects;
