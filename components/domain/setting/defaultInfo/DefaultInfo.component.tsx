import React, { useState, ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { Heading, Button } from "@components/index";
import {
  useDeleteProfileImage,
  usePatchNickname,
  usePostProfileImage,
} from "@service/index";
import { profileAtom } from "@recoil/index";
import { SetNickname, SetProfile } from "./containers";
import * as S from "./DefaultInfo.styled";

const DefaultInfo = () => {
  const [profile] = useRecoilState(profileAtom);

  const [nickname, setNickname] = useState(profile.nickname);
  const [changeProfile, setChangeProfile] = useState<File | "" | null>(null);
  const [changeProfileString, setChangeProfileString] = useState<string | null>(
    null,
  );

  const { mutate: usePostProfileImageMutate } = usePostProfileImage();
  const { mutate: useDeleteProfileImageMutate } = useDeleteProfileImage();
  const { mutate: usePatchNicknameMutate } = usePatchNickname();

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

      alert("기본 정보가 변경되었습니다");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Wrapper>
      <Heading css={S.heading} heading="기본 정보" />
      <SetProfile
        src={profile.profileImage}
        alt={`${nickname}의 프로필 사진`}
        changeProfileString={changeProfileString}
        handleChangeProfile={handleChangeProfile}
        handleDeleteProfile={handleClickDeleteProfile}
      />
      <SetNickname
        nickname={nickname}
        email={profile.email}
        handleChangeNickname={handleChangeNickname}
      />
      <Button
        css={S.button}
        type="button"
        disabled={changeProfileString === null && nickname === profile.nickname}
        mode="primary"
        label="변경사항 저장"
        handler={handleSubmit}
      />
    </S.Wrapper>
  );
};

export default DefaultInfo;
