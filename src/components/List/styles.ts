import styled from 'styled-components';

import { BikeIlustration } from '../Loader/styles';

import { styles } from '../../utils/constant/styles';

export const ContentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-items: stretch;
  align-items: stretch;
  padding: 30px 0;

  @media screen and (max-width: ${styles.mediaQueries.desktop - 1}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    grid-template-columns: 1fr;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;

  ${BikeIlustration} {
    animation: rotateBike 1s infinite;
    transform: scale(0.5) rotate(10deg);

    @keyframes rotateBike {
      0% {
        transform: scale(0.5) rotate(10deg);
      }

      50% {
        transform: scale(0.5) rotate(-10deg);
      }
    }
  }
`;
