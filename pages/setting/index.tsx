import React, { ReactElement, ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";

import {
  MainLayout,
  Button,
  Division,
  Heading,
  LabelContent,
} from "@components/index";
import { usePatchNickname, usePostProfileImage } from "@service/index";
import { userAtom } from "@recoil/index";
import { PencilIcon, TrashIcon, PictureIcon, PersonIcon } from "@icons/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const Setting: NextPageWithLayout = () => {
  const [profile] = useRecoilState(userAtom);
  const { mutate: usePostProfileImageMutate } = usePostProfileImage();
  const { mutate: usePatchNicknameMutate } = usePatchNickname();

  const [nickname, setNickname] = useState(
    profile.nickname ? profile.nickname : "",
  );

  const handleAddProfile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    usePostProfileImageMutate(formData);
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmitChangeNickname = () => {
    usePatchNicknameMutate(
      { body: { nickname } },
      {
        onSuccess: () => {
          alert("닉네임이 변경 되었습니다.");
        },
      },
    );
  };

  return (
    <S.Setting>
      <div>
        <Heading css={S.heading} heading="기본 정보" />
        <S.ProfileWrapper>
          <S.Profile>
            {profile.profileImage ? (
              <Image
                src={profile.profileImage}
                alt="프로필 이미지"
                width={80}
                height={80}
              />
            ) : (
              <PersonIcon />
            )}
          </S.Profile>
          <input
            type="file"
            accept=".jpeg, .jpg, .png"
            onChange={handleAddProfile}
          />
          {profile.profileImage ? <PencilIcon /> : <PictureIcon />}
          {profile.profileImage && (
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
                value={nickname}
                handleChange={handleChangeNickname}
              />
            </S.EmailIconWrapper>
          </LabelContent>
          <Button
            type="button"
            mode="primary"
            label="변경사항 저장"
            handler={handleSubmitChangeNickname}
          />
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
