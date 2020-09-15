import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const ItemContainer = styled.li`
  font-family: ${styles.fonts.sans};
  background: ${styles.colors.white};
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0,0,0,.07), 0 1px 0px rgba(0,0,0,.04);
  padding: 25px 30px;
  text-align: left;
  transition: transform .3s ease, box-shadow .3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: ${styles.boxShadow};
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: ${styles.colors.nobel};
    font-weight: ${styles.fontSize.light};

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    color: ${styles.colors.lightningYellow};
    font-size: 22px;
    font-weight: ${styles.fontSize.light};
    padding-bottom: 15px;
  }

  p {
    font-size: 15px;
    font-weight: ${styles.fontSize.light};
    padding-bottom: 12px;
  }

  strong {
    font-weight: ${styles.fontSize.bold};
  }
`;
