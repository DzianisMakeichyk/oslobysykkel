import * as React from 'react';

import {
  ItemContainer,
} from './styles';

interface ItemContainerProps {
  item?: ItemProps;
}

interface ItemProps {
  name?: string;
  num_bikes_available?: number;
  num_docks_available?: number;
  address?: string;
  lat?: number;
  lon?: number;
}

const Item = ({item}: ItemContainerProps) => {
  return <ItemContainer>
    <h3>
      {item.name}
    </h3>
    <p>🅿️ Free spots: <strong>{item.num_docks_available}</strong></p>
    <p>🚴 Availablle bikes: <strong>{item.num_bikes_available}</strong></p>
    
    📍<a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`}
    >
      {item.address}
    </a>
  </ItemContainer>;
};

export default Item;
