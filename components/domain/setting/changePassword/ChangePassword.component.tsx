import React from "react";

import { Heading, Button, LabelContent } from "@components/common";
import * as S from "./ChangePassword.styled";

const ChangePassword = () => {
  return (
    <div>
      <Heading css={S.heading} heading="비밀번호 변경" />
      <S.Form>
        <LabelContent css={S.labelContent} label="현재 비밀번호">
          <LabelContent.PasswordInput placeholder="현재 비밀번호" />
        </LabelContent>
        <LabelContent css={S.labelContent} label="새 비밀번호">
          <LabelContent.PasswordInput placeholder="새 비밀번호" />
        </LabelContent>
        <LabelContent css={S.labelContent} label="새 비밀번호 확인">
          <LabelContent.PasswordInput placeholder="새 비밀번호 확인" />
        </LabelContent>
        <S.PasswordHint>
          비밀번호는 영문, 숫자, 특수문자를 포함한 8-20자로 조합해 주세요
        </S.PasswordHint>
        <Button css={S.saveBtn} mode="primary" label="변경사항 저장" />
      </S.Form>
    </div>
  );
};

export default ChangePassword;
