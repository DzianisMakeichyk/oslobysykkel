import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const LoaderWrapper = styled.div`
  align-items: center;
  background-color: ${styles.colors.bg};
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%; 
  z-index: 9999;
`;

export const BikeIlustration = styled.div`
  position: relative;
  height: 75px;
  width: 86.25px;
  margin-top: 37.5px;
  background-image: url('https://www.flaticon.com/svg/static/icons/svg/3198/3198336.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  /*mug*/
  box-sizing: border-box;
  transform: rotate(10deg);
  animation: rotate 1s infinite;

  @keyframes rotate {
    0% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-10deg);
    }
  }
`;
