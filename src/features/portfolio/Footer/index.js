import useContent from "common/useContent";
import { FaGithub } from "react-icons/fa";

import {
  Brand,
  BrandColumn,
  Constellation,
  Container,
  Copyright,
  GridTexture,
  SourceChip,
  Tagline,
  Wrapper,
} from "./styled";

const REPO_URL = "https://github.com/BoosterTech/Software_Engineer_Portfolio";

const Footer = () => {
  const { footer } = useContent();
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper id="footer">
      <GridTexture aria-hidden="true" />
      <Constellation aria-hidden="true" />
      <Container>
        <BrandColumn>
          <Brand>Derek.dev</Brand>
          <Tagline>{footer.tagline}</Tagline>
          <SourceChip href={REPO_URL} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> {footer.viewSourceLabel}
          </SourceChip>
        </BrandColumn>
        <Copyright>
          &copy; {currentYear} Derek.dev &middot; {footer.rightsReserved}
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
