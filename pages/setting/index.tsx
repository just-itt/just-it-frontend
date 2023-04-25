import React, { useState, ReactElement, ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import {
  MainLayout,
  Button,
  Division,
  Heading,
  LabelContent,
  SetProfile,
} from "@components/index";
import {
  useDeleteProfileImage,
  usePatchNickname,
  usePostProfileImage,
} from "@service/index";
import { profileAtom } from "@recoil/index";
import type { NextPageWithLayout } from "pages/_app";
import * as S from "./index.styled";

const Setting: NextPageWithLayout = () => {
  const [profile] = useRecoilState(profileAtom);
  const { mutate: usePostProfileImageMutate } = usePostProfileImage();
  const { mutate: useDeleteProfileImageMutate } = useDeleteProfileImage();
  const { mutate: usePatchNicknameMutate } = usePatchNickname();

  const [changeProfile, setChangeProfile] = useState<File | string | null>(
    null,
  );
  const [changeProfileString, setChangeProfileString] = useState<string | null>(
    null,
  );
  const [nickname, setNickname] = useState(
    profile.nickname ? profile.nickname : "",
  );

  const handleChangeProfile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setChangeProfile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setChangeProfileString(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleClickDeleteProfile = () => {
    setChangeProfileString("");
    setChangeProfile("");
  };

  const handleSubmit = async () => {
    try {
      const temp = [];

      if (nickname !== profile.nickname) {
        temp.push(usePatchNicknameMutate({ body: { nickname } }));
      }

      if (changeProfile) {
        const formData = new FormData();
        formData.append("file", changeProfile);

        temp.push(usePostProfileImageMutate(formData));
      }

      if (changeProfile === "") {
        temp.push(useDeleteProfileImageMutate());
      }

      await Promise.all(temp);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Setting>
      <div>
        <Heading css={S.heading} heading="기본 정보" />
        <SetProfile
          src={profile.profileImage}
          alt={`${profile.nickname}의 프로필 사진`}
          changeProfileString={changeProfileString}
          handleChangeProfile={handleChangeProfile}
          handleDeleteProfile={handleClickDeleteProfile}
        />
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
              value={profile.email}
            />
          </LabelContent>
          <Button
            type="button"
            mode="primary"
            label="변경사항 저장"
            handler={handleSubmit}
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
