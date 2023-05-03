import React from "react";

import { Heading, Button, LabelContent } from "@components/index";
import { PASSWORD_VALIDATE } from "utils/validate";
import { useChangePassword } from "./hooks";
import * as S from "./ChangePassword.styled";

const ChangePassword = () => {
  const { isBtnDisable, register, handleSubmit } = useChangePassword();

  return (
    <div>
      <Heading css={S.heading} heading="비밀번호 변경" />
      <S.Form onSubmit={handleSubmit}>
        <LabelContent css={S.labelContent} label="현재 비밀번호">
          <LabelContent.PasswordInput
            placeholder="현재 비밀번호"
            register={register("password", { required: true })}
          />
        </LabelContent>
        <LabelContent css={S.labelContent} label="새 비밀번호">
          <LabelContent.PasswordInput
            placeholder="새 비밀번호"
            register={register("newPassword", {
              required: true,
              pattern: PASSWORD_VALIDATE,
            })}
          />
        </LabelContent>
        <LabelContent css={S.labelContent} label="새 비밀번호 확인">
          <LabelContent.PasswordInput
            placeholder="새 비밀번호 확인"
            register={register("newPasswordConfirm", {
              required: true,
              pattern: PASSWORD_VALIDATE,
            })}
          />
        </LabelContent>
        <S.PasswordHint>
          비밀번호는 영문, 숫자, 특수문자를 포함한 8-20자로 조합해 주세요
        </S.PasswordHint>
        <Button
          css={S.saveBtn}
          type="submit"
          disabled={isBtnDisable}
          mode="primary"
          label="변경사항 저장"
        />
      </S.Form>
    </div>
  );
};

export default ChangePassword;
