import { useLanguage } from "common/LanguageProvider";
import useContent from "common/useContent";
import { FiArrowUpRight } from "react-icons/fi";

import { icons } from "./contactIcons";
import {
  Arrow,
  CardsGrid,
  ContactLabel,
  ContactName,
  ContactTile,
  Eyebrow,
  Header,
  IconFrame,
  Subtitle,
  Wrapper,
} from "./styled";

const Contact = ({ id }) => {
  const { contact } = useContent();
  const { language } = useLanguage();

  return (
    <Wrapper id={id}>
      <Eyebrow aria-hidden="true" />
      <Header>
        {contact.headerPlain}{" "}
        <span data-text={contact.headerAccent}>{contact.headerAccent}</span>
      </Header>
      <Subtitle>{contact.contactParagraph}</Subtitle>
      <CardsGrid>
        {icons.map((icon) => {
          const isExternal = !icon.link.startsWith("mailto:");
          return (
            <ContactTile
              key={icon.id}
              href={icon.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              $accent={icon.accent}
            >
              <Arrow $accent={icon.accent} aria-hidden="true">
                <FiArrowUpRight />
              </Arrow>
              <IconFrame $id={icon.id} $accent={icon.accent}>
                <img
                  src={icon.iconURL}
                  alt=""
                  width={icon.iconWidth}
                  height={icon.iconHeight}
                  loading="lazy"
                />
              </IconFrame>
              <ContactName>{icon.name}</ContactName>
              <ContactLabel>{icon.label[language]}</ContactLabel>
            </ContactTile>
          );
        })}
      </CardsGrid>
    </Wrapper>
  );
};

export default Contact;
