import { useLanguage } from "common/LanguageProvider";
import useContent from "common/useContent";
import { useMediaQuery } from "common/useMediaQuery";
import { PROJECT_IMAGE_HEIGHT, PROJECT_IMAGE_WIDTH } from "content/projects";
import { ComingSoonBadge } from "features/portfolio/Projects/ComingSoonBadge.styles";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { themes } from "themes";

import {
  Backdrop,
  CloseButton,
  Modal,
  ModalCTAButton,
  ModalCTAContainer,
  ModalContent,
  ModalDescription,
  ModalBody,
  ModalImage,
  ModalImageWrapper,
  ModalNavButton,
  ModalScroll,
  ModalSwap,
  ModalTechBadge,
  ModalTechBadges,
  ModalTitle,
} from "./ProjectModal.styles";

/**
 * @param {{ project: import("../../../types").Project | null; onClose: () => void;
 *   onPrev: () => void; onNext: () => void; hasPrev: boolean; hasNext: boolean }} props
 */
const ProjectModal = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  const { language } = useLanguage();
  const { projects: projectsContent } = useContent();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery(`(max-width: ${themes.breakpoint.lg})`);
  const modalRef = useRef(null);
  const scrollRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [direction, setDirection] = useState(0);
  const [loadedSrc, setLoadedSrc] = useState(null);

  const goPrev = useCallback(() => {
    setDirection(-1);
    onPrev();
  }, [onPrev]);
  const goNext = useCallback(() => {
    setDirection(1);
    onNext();
  }, [onNext]);

  useEffect(() => {
    if (!project) return;

    const trigger = document.activeElement;
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
      if (trigger instanceof HTMLElement)
        trigger.focus({ preventScroll: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && hasPrev) goPrev();
      if (e.key === "ArrowRight" && hasNext) goNext();
      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!modalRef.current.contains(document.activeElement)) {
          first.focus();
          e.preventDefault();
        } else if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, goPrev, goNext, hasPrev, hasNext]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project]);

  if (!project) return null;

  const imageSrc = project.modalImageURL || project.imageURL;
  const modalTransition = shouldReduceMotion
    ? { duration: 0.15 }
    : { type: "spring", stiffness: 420, damping: 34 };
  const modalInitial = shouldReduceMotion
    ? { opacity: 0 }
    : { scale: 0.95, opacity: 0, y: 16 };
  const modalExit = shouldReduceMotion
    ? { opacity: 0 }
    : {
        scale: 0.97,
        opacity: 0,
        y: 8,
        transition: { duration: 0.16, ease: "easeIn" },
      };
  const swapX = shouldReduceMotion ? 0 : 55;
  const swapTransition = shouldReduceMotion
    ? { duration: 0.15 }
    : { type: "spring", stiffness: 260, damping: 28 };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    if ((offset.x < -60 || velocity.x < -400) && hasNext) goNext();
    else if ((offset.x > 60 || velocity.x > 400) && hasPrev) goPrev();
  };

  return createPortal(
    <Backdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.18 }}
      onClick={onClose}
      data-testid="project-modal-backdrop"
    >
      <Modal
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title[language]}
        aria-describedby="project-modal-description"
        initial={modalInitial}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={modalExit}
        transition={modalTransition}
        onClick={(e) => e.stopPropagation()}
        drag={isMobile ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        dragMomentum={false}
        dragDirectionLock
        onDragEnd={handleDragEnd}
        style={{ touchAction: isMobile ? "pan-y" : "auto" }}
      >
        <CloseButton
          ref={closeButtonRef}
          onClick={onClose}
          aria-label={projectsContent.closeLabel}
        >
          <FaTimes />
        </CloseButton>
        {hasPrev && (
          <ModalNavButton
            $left
            onClick={goPrev}
            aria-label={projectsContent.previousLabel}
          >
            <FiChevronLeft />
          </ModalNavButton>
        )}
        {hasNext && (
          <ModalNavButton
            onClick={goNext}
            aria-label={projectsContent.nextLabel}
          >
            <FiChevronRight />
          </ModalNavButton>
        )}
        <ModalScroll ref={scrollRef}>
          <ModalSwap layout>
            <AnimatePresence mode="popLayout" initial={false}>
              <ModalBody
                key={project.title.English}
                initial={{
                  opacity: 0,
                  x: `${swapX * direction}%`,
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0.95,
                  x: `${-swapX * direction}%`,
                }}
                transition={swapTransition}
              >
                <ModalImageWrapper>
                  <ModalImage
                    $loaded={loadedSrc === imageSrc}
                    src={imageSrc}
                    width={
                      project.modalImageURL
                        ? project.modalImageWidth
                        : PROJECT_IMAGE_WIDTH
                    }
                    height={
                      project.modalImageURL
                        ? project.modalImageHeight
                        : PROJECT_IMAGE_HEIGHT
                    }
                    alt={projectsContent.screenshotAlt.replace(
                      "{title}",
                      project.title[language]
                    )}
                    onLoad={() => setLoadedSrc(imageSrc)}
                  />
                </ModalImageWrapper>
                <ModalContent>
                  <ModalTitle>{project.title[language]}</ModalTitle>
                  <ModalDescription
                    id="project-modal-description"
                    dangerouslySetInnerHTML={{
                      __html: project.description[language],
                    }}
                  />
                  {project.technologies?.length > 0 && (
                    <ModalTechBadges>
                      {project.technologies.map((tech) => (
                        <ModalTechBadge key={tech}>{tech}</ModalTechBadge>
                      ))}
                    </ModalTechBadges>
                  )}
                  <ModalCTAContainer>
                    {project.variant === "comingSoon" && (
                      <ComingSoonBadge $inline>
                        {projectsContent.comingSoonLabel}
                      </ComingSoonBadge>
                    )}
                    {project.GitHubPagesURL && (
                      <ModalCTAButton
                        href={project.GitHubPagesURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                        {project.GitHubPagesURLTag?.[language] || "Live Demo"}
                      </ModalCTAButton>
                    )}
                    {project.GitHubRepoURL && (
                      <ModalCTAButton
                        $secondary
                        href={project.GitHubRepoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        {project.GitHubRepoURLTag?.[language] || "GitHub"}
                      </ModalCTAButton>
                    )}
                  </ModalCTAContainer>
                </ModalContent>
              </ModalBody>
            </AnimatePresence>
          </ModalSwap>
        </ModalScroll>
      </Modal>
    </Backdrop>,
    document.body
  );
};

export default ProjectModal;
