import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const HeaderStyled = styled.header`
  padding: ${115 / 1600 * 100}% 0 ${75 / 1600 * 100}%;
  
  @media screen and (min-width: ${styles.mediaQueries.mobile}px) {
    text-align: center;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${styles.colors.doveGray};
  display: inline-block;
  font-family: ${styles.fonts.sans};
  font-size: 90px;
  font-weight: ${styles.fontSize.bold};
  text-transform: uppercase;

  @media screen and (max-width: ${styles.mediaQueries.desktop}px) {
    font-size: 32px;
  }

  @media screen and (max-width: ${styles.mediaQueries.mobile}px) {
    font-size: 26px;
  }

  span {
    color: ${styles.colors.lightningYellow};
  }
`;
