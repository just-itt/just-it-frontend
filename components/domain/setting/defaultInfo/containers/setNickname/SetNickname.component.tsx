import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { LabelContent } from "@components/index";
import * as S from "./SetNickname.styled";

interface SetNicknameProps {
  nicknameRegister: UseFormRegisterReturn<"nickname">;
  emailRegister: UseFormRegisterReturn<"email">;
}

const SetNickname = ({ nicknameRegister, emailRegister }: SetNicknameProps) => {
  return (
    <S.Form>
      <LabelContent css={S.labelContent} label="닉네임">
        <LabelContent.Input
          css={S.nicknameInput}
          isError={false}
          placeholder=""
          maxLength={10}
          register={nicknameRegister}
        />
      </LabelContent>
      <LabelContent css={S.emailLabelContent} label="이메일">
        <LabelContent.Input
          css={S.emailInput}
          isError={false}
          placeholder=""
          disabled
          register={emailRegister}
        />
      </LabelContent>
    </S.Form>
  );
};

export default SetNickname;
