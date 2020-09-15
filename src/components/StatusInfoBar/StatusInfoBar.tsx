import * as React from 'react';
/* tslint:disable-next-line */

import { InfoBar } from './styles';

interface StatusInfoBarProps {
  status: number;
  text: string;
}

const StatusInfoBar = ({
  status,
  text,
}: StatusInfoBarProps) => {
  return (
    <InfoBar>
      <h2>
        {text}:
      </h2>
      <p>
        {status}
      </p>
    </InfoBar>
  );
};

export default StatusInfoBar;
