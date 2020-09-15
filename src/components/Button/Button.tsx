import * as React from 'react';

import { ButtonStyles, ButtonWrapper } from './styles';

interface ButtonProps {
  onSetLoadItems: () => void;
  text: string;
  disabled: boolean;
}

const Button = ({ text, onSetLoadItems, disabled }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={() => onSetLoadItems()}
        disabled={disabled}
      >
        {text}
      </ButtonStyles>
    </ButtonWrapper>
  );
};

export default Button;
