import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const InputWrapper = styled.div`
  color: ${styles.colors.doveGray};
  display: flex;
  flex-direction: column;
  font-family: ${styles.fonts.sans};
  font-size: 18px;
  font-weight: ${styles.fontSize.light};
  text-align: center;
  padding-bottom: 30px;

  label {
    padding-bottom: 10px;
  }

  input {
    appearance: none;
    box-sizing: border-box;
    background: none;
    border: 0;
    display: block;
    height: 30px;
    max-width: 490px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    background: ${styles.colors.white};
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid ${styles.colors.nobel};
  }

  @media screen and (max-width: ${styles.mediaQueries.mobile}px) {
    font-size: 16px;
    padding-bottom: 12px;
  }
`;