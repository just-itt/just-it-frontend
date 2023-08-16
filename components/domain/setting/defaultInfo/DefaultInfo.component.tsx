import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Heading, Button } from "@components/index";
import {
  useDeleteProfileImage,
  useGetMyProfile,
  usePatchNickname,
  usePostProfileImage,
} from "@service/index";
import { SetNickname, SetProfile } from "./containers";
import * as S from "./DefaultInfo.styled";

const DefaultInfo = () => {
  const { data: profile } = useGetMyProfile();

  const { register, watch, setValue, reset, handleSubmit } = useForm<{
    profile: string | FileList | null;
    nickname: string;
    email: string;
  }>();

  const queryClient = useQueryClient();
  const { mutate: usePostProfileImageMutate } = usePostProfileImage();
  const { mutate: useDeleteProfileImageMutate } = useDeleteProfileImage();
  const { mutate: usePatchNicknameMutate } = usePatchNickname();

  const handleClickDeleteProfile = () => setValue("profile", "");

  const updateProfile = async (data: {
    nickname?: string;
    profile: string | FileList | null;
  }) => {
    try {
      const temp = [];

      if (data.nickname !== profile?.nickname && data.nickname) {
        temp.push(
          usePatchNicknameMutate({ body: { nickname: data.nickname } }),
        );
      }

      if (typeof watch("profile") === "object") {
        const profileImage = data.profile?.[0] as File;

        const formData = new FormData();
        formData.append("file", profileImage);

        temp.push(
          usePostProfileImageMutate(formData, {
            onSuccess: () => queryClient.invalidateQueries(["myProfile"]),
          }),
        );
      }

      if (watch("profile") === "") {
        temp.push(useDeleteProfileImageMutate());
      }

      await Promise.all(temp);
      await toast.success("기본 정보가 변경되었습니다");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!profile) return;

    reset({
      profile: profile.profile_image,
      nickname: profile?.nickname,
      email: profile?.email,
    });
  }, [profile]);

  if (!profile) return null;

  return (
    <S.Wrapper>
      <Heading css={S.heading} heading="기본 정보" />
      <SetProfile
        src={profile.profile_image}
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
