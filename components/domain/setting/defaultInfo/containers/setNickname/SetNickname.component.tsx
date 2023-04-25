import React, { ChangeEvent } from "react";

import { LabelContent } from "@components/index";
import * as S from "./SetNickname.styled";

interface SetNicknameProps {
  nickname: string;
  email: string;
  handleChangeNickname: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SetNickname = ({
  nickname,
  email,
  handleChangeNickname,
}: SetNicknameProps) => {
  return (
    <S.Form>
      <LabelContent css={S.labelContent} label="닉네임">
        <LabelContent.Input
          css={S.nicknameInput}
          placeholder=""
          value={nickname}
          handleChange={handleChangeNickname}
        />
      </LabelContent>
      <LabelContent css={S.emailLabelContent} label="이메일">
        <LabelContent.Input
          css={S.emailInput}
          placeholder=""
          disabled
          value={email}
        />
      </LabelContent>
    </S.Form>
  );
};

export default SetNickname;
