import React from "react";

import ErrorMessage from "../errorMessage/ErrorMessage.component";
import * as S from "./ErrorWrapper.styled";

interface ErrorWrapperProps {
  className?: string;
  isError: boolean;
  errorMessage: string;
  children: React.ReactNode;
}

const ErrorWrapper = ({
  className,
  isError,
  errorMessage,
  children,
}: ErrorWrapperProps) => {
  return (
    <S.Wrapper className={className}>
      {children}
      {isError && <ErrorMessage message={errorMessage} />}
    </S.Wrapper>
  );
};

export default ErrorWrapper;
