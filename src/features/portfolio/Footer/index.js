import useContent from "common/useContent";

import {
  Brand,
  BrandColumn,
  Constellation,
  Container,
  Copyright,
  GridTexture,
  Tagline,
  Wrapper,
} from "./styled";

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
        </BrandColumn>
        <Copyright>
          &copy; {currentYear} Derek.dev &middot; {footer.rightsReserved}
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
