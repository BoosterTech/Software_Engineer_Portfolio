import useContent from "common/useContent";
import nextIcon from "images/nextIcon.webp";
import reactIcon from "images/React_wordmark_light.svg";
import reactQueryIcon from "images/reactQueryIcon.webp";
import reduxIcon from "images/redux.svg";
import styledComponentsIcon from "images/styledcomponents.webp";
import supabaseIcon from "images/Supabase_wordmark_light.svg";
import typeScriptIcon from "images/typeScriptIcon.webp";
import vercelIcon from "images/vercelIcon.webp";
import {
  FaBolt,
  FaExpandArrowsAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaBrain,
  FaRobot,
  FaSitemap,
  FaEllipsisH,
  FaStar,
} from "react-icons/fa";
import { SiStripe, SiFramer } from "react-icons/si";

import {
  ExploreSection,
  ExploreHeader,
  ExploreLabel,
  ExploreParagraph,
  ExploreTrack,
  ExploreChip,
  ExploreChipHeader,
  ExploreChipDescription,
  MoreChip,
  MoreChipHeader,
  MoreChipDescription,
} from "./exploreLayout";
import { OrbitSection } from "./OrbitSection";
import {
  ToolsShowcaseWrapper,
  ShowcaseGrid,
  ShowcaseContent,
  SectionLabel,
  SectionTitle,
  PlainTitlePart,
  GradientWord,
  SectionDescription,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  FeatureTitle,
  FeatureSubtitle,
  OrbitSectionWrapper,
} from "./showcaseLayout";

const orbitTechnologies = [
  {
    id: "react",
    name: "React",
    icon: reactIcon,
    iconWidth: 600,
    iconHeight: 180,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: typeScriptIcon,
    iconWidth: 160,
    iconHeight: 160,
  },
  {
    id: "redux",
    name: "Redux",
    icon: reduxIcon,
    iconWidth: 800,
    iconHeight: 800,
    showLabel: true,
  },
  {
    id: "styled",
    name: "Styled Components",
    icon: styledComponentsIcon,
    iconWidth: 200,
    iconHeight: 200,
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: supabaseIcon,
    iconWidth: 581,
    iconHeight: 113,
  },
  {
    id: "react-query",
    name: "React Query",
    icon: reactQueryIcon,
    iconWidth: 160,
    iconHeight: 102,
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: vercelIcon,
    iconWidth: 160,
    iconHeight: 89,
  },
];

const exploreIcons = [
  <FaBrain />,
  <SiStripe aria-hidden="true" />,
  <FaRobot />,
  <SiFramer aria-hidden="true" />,
  <FaSitemap />,
];

const featureIcons = [
  <FaBolt />,
  <FaExpandArrowsAlt />,
  <FaLaptopCode />,
  <FaPaintBrush />,
];

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ToolsShowcase = () => {
  const { home } = useContent();
  const showcase = home.toolsShowcase;

  return (
    <ToolsShowcaseWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      $variants={container}
    >
      <ShowcaseGrid>
        <OrbitSectionWrapper>
          <OrbitSection
            technologies={orbitTechnologies}
            centerIcon={nextIcon}
            centerIconWidth={160}
            centerIconHeight={97}
            centerLabel="Next.js"
          />
        </OrbitSectionWrapper>
        <ShowcaseContent>
          <SectionLabel>
            <FaStar />
            {home.skillsetHeader}
          </SectionLabel>
          <SectionTitle>
            <PlainTitlePart>{showcase.titlePlain}</PlainTitlePart>{" "}
            <GradientWord>{showcase.titleAccent}</GradientWord>
          </SectionTitle>
          <SectionDescription>{showcase.description}</SectionDescription>

          <FeatureGrid>
            {showcase.features.map((feature, index) => (
              <FeatureCard
                key={index}
                $variants={item}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FeatureIcon>{featureIcons[index]}</FeatureIcon>
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
                </FeatureText>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </ShowcaseContent>
      </ShowcaseGrid>

      <ExploreSection $variants={item}>
        <ExploreHeader>
          <ExploreLabel>
            <FaEllipsisH />
            {home.learnNextHeader}
          </ExploreLabel>
          <ExploreParagraph>{showcase.exploreParagraph}</ExploreParagraph>
        </ExploreHeader>
        <ExploreTrack
          role="region"
          aria-label={showcase.exploreAriaLabel}
          tabIndex={0}
        >
          {showcase.exploreItems.map((item, index) => (
            <ExploreChip
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <ExploreChipHeader>
                {exploreIcons[index]}
                {item.name}
              </ExploreChipHeader>
              <ExploreChipDescription>
                {item.description}
              </ExploreChipDescription>
            </ExploreChip>
          ))}
          <MoreChip
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + showcase.exploreItems.length * 0.05 }}
          >
            <MoreChipHeader>
              <FaEllipsisH />
              {showcase.moreTitle}
            </MoreChipHeader>
            <MoreChipDescription>{showcase.moreSubtitle}</MoreChipDescription>
          </MoreChip>
        </ExploreTrack>
      </ExploreSection>
    </ToolsShowcaseWrapper>
  );
};
