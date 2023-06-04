import React from "react";

import * as S from "./ErrorMessage.styled";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <S.ErrorMessage>{message}</S.ErrorMessage>;
};

export default ErrorMessage;
