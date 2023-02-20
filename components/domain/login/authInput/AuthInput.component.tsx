import React from "react";

import * as S from "./AuthInput.styled";

interface AuthInputProps {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({ placeholder, handleChange }: AuthInputProps) => {
  return <S.Input placeholder={placeholder} onChange={handleChange} />;
};

export default AuthInput;
