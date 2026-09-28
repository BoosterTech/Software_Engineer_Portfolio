import { useLanguage } from "common/LanguageProvider";
import useContent from "common/useContent";
import { PROJECT_IMAGE_HEIGHT, PROJECT_IMAGE_WIDTH } from "content/projects";
import { ComingSoonBadge } from "features/portfolio/Projects/ComingSoonBadge.styles";
import { FaExpandArrowsAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import {
  BottomBar,
  BottomRow,
  CTAButton,
  CTAContainer,
  ExpandButton,
  Overlay,
  Slide,
  SlideImage,
} from "./styled";

/** @param {{ project: import("../../../../types").Project; isActive: boolean; position: "left" | "center" | "right"; onClick: () => void; onExpand: (trigger: HTMLElement) => void }} props */
const CarouselSlide = ({ project, isActive, position, onClick, onExpand }) => {
  const { language } = useLanguage();
  const { projects: projectsContent } = useContent();

  const prefetchModalImage = () => {
    const src = project.modalImageURL || project.imageURL;
    if (src) new Image().src = src;
  };

  return (
    <Slide
      $isActive={isActive}
      $position={position}
      role="group"
      aria-roledescription="slide"
      aria-label={project.title[language]}
      onClick={isActive ? (e) => onExpand(e.currentTarget) : onClick}
      onMouseEnter={prefetchModalImage}
    >
      <SlideImage
        src={project.imageURL}
        alt={projectsContent.screenshotAlt.replace(
          "{title}",
          project.title[language]
        )}
        width={PROJECT_IMAGE_WIDTH}
        height={PROJECT_IMAGE_HEIGHT}
        loading="lazy"
      />
      {isActive && project.variant !== "comingSoon" && (
        <ExpandButton
          onFocus={prefetchModalImage}
          onClick={(e) => {
            e.stopPropagation();
            onExpand(e.currentTarget);
          }}
          aria-label={projectsContent.expandLabel.replace(
            "{title}",
            project.title[language]
          )}
        >
          <FaExpandArrowsAlt />
        </ExpandButton>
      )}
      {project.variant !== "comingSoon" && (
        <Overlay
          initial={false}
          animate={{
            y: isActive ? 0 : "100%",
          }}
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <BottomBar>
            <BottomRow>
              <CTAContainer>
                {isActive && project.GitHubPagesURL && (
                  <CTAButton
                    href={project.GitHubPagesURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                    {project.GitHubPagesURLTag?.[language] ||
                      projectsContent.liveDemoLabel}
                  </CTAButton>
                )}
                {isActive && project.GitHubRepoURL && (
                  <CTAButton
                    $secondary
                    href={project.GitHubRepoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    {project.GitHubRepoURLTag?.[language] ||
                      projectsContent.repoLabel}
                  </CTAButton>
                )}
              </CTAContainer>
            </BottomRow>
          </BottomBar>
        </Overlay>
      )}
      {project.variant === "comingSoon" && (
        <ComingSoonBadge>{projectsContent.comingSoonLabel}</ComingSoonBadge>
      )}
    </Slide>
  );
};

export default CarouselSlide;
