import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const WrapperStatusInfoBar = styled.div`
  display: flex;
  margin-bottom: 45px;

  @media screen and (min-width: ${styles.mediaQueries.desktop + 1}px) {
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${styles.mediaQueries.desktop - 1}px) {
    justify-content: space-between;
  }

  @media screen and (max-width: ${styles.mediaQueries.mobile + 1}px) {
    flex-direction: column;
    margin-bottom: 25px;
  }
`;

export const InfoBar = styled.div`
  box-sizing: border-box;
  font-family: ${styles.fonts.sans};
  background: ${styles.colors.white};
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0,0,0,.07), 0 1px 0px rgba(0,0,0,.04);
  padding: 35px 20px;
  text-align: center;

  & + * {
    @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
      margin-left: ${65 / 1024 * 100}%;
    }

    @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: ${styles.mediaQueries.desktop + 1}px) {
    width: 100%;
  }

  @media screen and (min-width: ${styles.mediaQueries.desktop + 1}px) {
    width: ${460 / 1884 * 100}%;
  }

  h2 {
    font-size: 21px;
    padding-bottom: 13px;
    color: ${styles.colors.lightningYellow};
  }

  p {
    font-style: italic;
    font-size: 15px;
    font-weight: ${styles.fontSize.light};
  }
`;
