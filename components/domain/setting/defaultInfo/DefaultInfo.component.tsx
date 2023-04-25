import React, { useState, ChangeEvent } from "react";

import { Heading, Button } from "@components/index";
import {
  useDeleteProfileImage,
  usePatchNickname,
  usePostProfileImage,
} from "@service/index";
import { SetNickname, SetProfile } from "./containers";
import * as S from "./DefaultInfo.styled";

interface DefaultInfoProps {
  profileImage: string | null;
  profileNickname: string;
  email: string;
}

const DefaultInfo = ({
  profileImage,
  profileNickname,
  email,
}: DefaultInfoProps) => {
  const [nickname, setNickname] = useState(profileNickname);
  const [changeProfile, setChangeProfile] = useState<File | string | null>(
    null,
  );
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

      if (nickname !== profileNickname) {
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
        src={profileImage}
        alt={`${nickname}의 프로필 사진`}
        changeProfileString={changeProfileString}
        handleChangeProfile={handleChangeProfile}
        handleDeleteProfile={handleClickDeleteProfile}
      />
      <SetNickname
        nickname={nickname}
        email={email}
        handleChangeNickname={handleChangeNickname}
      />
      <Button
        css={S.button}
        type="button"
        disabled={changeProfileString === null && nickname === profileNickname}
        mode="primary"
        label="변경사항 저장"
        handler={handleSubmit}
      />
    </S.Wrapper>
  );
};

export default DefaultInfo;
