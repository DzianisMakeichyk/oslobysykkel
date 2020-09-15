import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface ParagraphProps {
  withPadding?: boolean;
}

const colorNames = {
  alabaster: '#f8f8f8',
  doveGray: '#737373',
  lightningYellow: '#fdc22a',
  nobel: '#b6b6b6',
  white: '#fff',
};

const colors = {
  ...colorNames,
  bg: colorNames.alabaster,
  text: colorNames.nobel,
};

const mediaQueries = {
  desktop: 1024,
  hd: 1280,
  mobile: 700,
  uhd: 1440,
};

const boxShadow = '0 1px 8px rgba(0,0,0,.17), 0 1px 9px rgba(0,0,0,.04)';

const fonts = {
  sans: 'Open Sans, sans-serif',
};

const fontSize = {
  bold: 700,
  light: 300,
  regular: 400,
};

export const styles = {
  colors,
  fontSize,
  fonts,
  mediaQueries,
  boxShadow,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  .appear-enter {
    opacity: 0.01;
  }

  .appear-enter.appear-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .appear-leave {
    opacity: 1;
  }

  .appear-leave.appear-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export const BodyWrapper = styled.div`
  background: ${styles.colors.bg};
  min-height: 100vh;
`;

export const Main = styled.main`
  -webkit-overflow-scrolling: touch;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  padding: 0 0 40px;
  max-width: ${1540 / 1884 * 100}%;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: ${styles.fontSize.light};
  text-align: center;
  font-family: ${styles.fonts.sans};
  ${({ withPadding }: ParagraphProps) => withPadding && 'padding: 30px'};
`;