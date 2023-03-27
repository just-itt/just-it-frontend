import React, { useState, ReactElement } from "react";

import { Button, Division, Heading, LabelContent } from "@components/common";
import { MainLayout } from "@components/layout";
import { PencilIcon, TrashIcon, PictureIcon, PersonIcon } from "@icons/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const Setting: NextPageWithLayout = () => {
  const [profile, setProfile] = useState(null);

  return (
    <S.Setting>
      <div>
        <Heading css={S.heading} heading="기본 정보" />
        <S.ProfileWrapper>
          <S.Profile>
            <PersonIcon />
          </S.Profile>
          <button type="button">
            {profile ? <PencilIcon /> : <PictureIcon />}
          </button>
          {profile && (
            <button type="button">
              <TrashIcon />
            </button>
          )}
        </S.ProfileWrapper>
        <S.Form>
          <LabelContent css={S.labelContent} label="이메일">
            <S.EmailIconWrapper>
              {"hoon4528@gmail.com".includes("gmail") && <PersonIcon />}
              <LabelContent.Input
                css={S.emailInput}
                placeholder=""
                disabled
                value="hoon4528@gmail.com"
              />
            </S.EmailIconWrapper>
          </LabelContent>
          <LabelContent css={S.nicknameLabelContent} label="닉네임">
            <S.EmailIconWrapper>
              <LabelContent.Input
                css={S.nicknameInput}
                placeholder=""
                value="캔디바"
              />
            </S.EmailIconWrapper>
          </LabelContent>
          <Button mode="primary" label="변경사항 저장" />
        </S.Form>
        <Division css={S.division} />
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
        </S.Form>
        <Button css={S.saveBtn} mode="primary" label="변경사항 저장" />
      </div>
    </S.Setting>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Setting;
