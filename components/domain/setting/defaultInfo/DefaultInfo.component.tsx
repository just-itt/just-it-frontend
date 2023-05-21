import React from "react";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";

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

  const { register, watch, setValue, handleSubmit } = useForm<{
    profile: string | FileList | null;
    nickname: string;
    email: string;
  }>({
    defaultValues: {
      profile: profile.profileImage,
      nickname: profile.nickname,
      email: profile.email,
    },
  });

  const { mutate: usePostProfileImageMutate } = usePostProfileImage();
  const { mutate: useDeleteProfileImageMutate } = useDeleteProfileImage();
  const { mutate: usePatchNicknameMutate } = usePatchNickname();

  const handleClickDeleteProfile = () => {
    setValue("profile", "");
  };

  const updateProfile = async (data: {
    nickname?: string;
    profile: string | FileList | null;
  }) => {
    try {
      const temp = [];

      if (data.nickname !== profile.nickname && data.nickname) {
        temp.push(
          usePatchNicknameMutate({ body: { nickname: data.nickname } }),
        );
      }

      if (typeof watch("profile") === "object") {
        const profileImage = data.profile?.[0] as File;

        const formData = new FormData();
        formData.append("file", profileImage);

        temp.push(usePostProfileImageMutate(formData));
      }

      if (watch("profile") === "") {
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
        alt={`${watch("nickname")}의 프로필 사진`}
        watch={watch}
        register={register("profile")}
        handleDeleteProfile={handleClickDeleteProfile}
      />
      <SetNickname
        nicknameRegister={register("nickname")}
        emailRegister={register("email")}
      />
      <Button
        css={S.button}
        type="button"
        disabled={
          !(watch("profile") instanceof FileList) &&
          watch("profile") !== "" &&
          watch("nickname") === profile.nickname
        }
        mode="primary"
        label="변경사항 저장"
        handler={handleSubmit(updateProfile)}
      />
    </S.Wrapper>
  );
};

export default DefaultInfo;
