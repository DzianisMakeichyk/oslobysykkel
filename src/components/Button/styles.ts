import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyles = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  font-size: 15px;
  box-sizing: border-box;
  font-family: ${styles.fonts.sans};
  background: ${styles.colors.white};
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0,0,0,.07), 0 1px 0px rgba(0,0,0,.04);
  padding: 15px 20px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  color: ${styles.colors.doveGray};
  cursor: pointer;
  transition: transform .3s ease, box-shadow .3s ease, color .3s ease, background .3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:enabled {
    box-shadow: ${styles.boxShadow};
    transform: scale(1.05);
    background: ${styles.colors.lightningYellow};
    color: ${styles.colors.white};
  }
`;