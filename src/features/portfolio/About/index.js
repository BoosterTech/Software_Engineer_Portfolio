import useContent from "common/useContent";
import {
  FaBookOpen,
  FaLayerGroup,
  FaLightbulb,
  FaRobot,
  FaStar,
} from "react-icons/fa";

import CodeTerminal from "./CodeTerminal";
import GradientHeading from "./GradientHeading";
import {
  Wrapper,
  TerminalColumn,
  ContentColumn,
  JourneyLabel,
  JourneyParagraph,
  PlainHeadingPart,
  GradientHeadingPart,
  FeaturesGrid,
  FeatureCard,
  FeatureText,
  FeatureTitle,
  FeatureDescription,
} from "./styled";

const featureIcons = [FaLayerGroup, FaRobot, FaLightbulb, FaBookOpen];

/** @param {{ id: string }} props */
const About = ({ id }) => {
  const { about } = useContent();

  return (
    <Wrapper id={id}>
      <TerminalColumn
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CodeTerminal />
      </TerminalColumn>
      <ContentColumn
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <JourneyLabel>
          <FaStar />
          {about.journeyLabel}
        </JourneyLabel>
        <GradientHeading as="h2">
          <PlainHeadingPart>{about.journeyHeaderPlain}</PlainHeadingPart>{" "}
          <GradientHeadingPart data-text={about.journeyHeaderAccent}>
            {about.journeyHeaderAccent}
          </GradientHeadingPart>
        </GradientHeading>
        <JourneyParagraph html={about.journeyParagraph} />
        <FeaturesGrid>
          {about.journeyFeatures.map((feature, index) => {
            const Icon = featureIcons[index] ?? FaLightbulb;
            return (
              <FeatureCard
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08 }}
              >
                <Icon />
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureText>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </ContentColumn>
    </Wrapper>
  );
};

export default About;
