import React from "react";

import * as S from "./Button.styled";

interface ButtonProps {
  className?: string;
  mode: "primary" | "secondary";
  type?: "button";
  disabled?: boolean;
  label: string;
  isError?: boolean;
}

const Button = ({
  className,
  mode,
  type,
  disabled,
  label,
  isError,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      mode={mode}
      type={type}
      disabled={isError || disabled}
    >
      {label}
    </S.Button>
  );
};

export default Button;
