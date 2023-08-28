import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import imageCompression from "browser-image-compression";

import { Heading, Button } from "@components/index";
import {
  loginKeys,
  useDeleteProfileImage,
  useGetMyProfile,
  usePatchNickname,
  usePostProfileImage,
} from "@service/index";
import { makeFileName } from "utils";
import type { DefaultInfoForm } from "types";
import { SetNickname, SetProfile } from "./containers";
import * as S from "./DefaultInfo.styled";

const DefaultInfo = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [isProfileLoading, setProfileLoading] = useState(false);

  const { register, watch, setValue, reset, handleSubmit } =
    useForm<DefaultInfoForm>();

  const queryClient = useQueryClient();
  const { data: profile } = useGetMyProfile();
  const { mutate: usePostProfileImageMutate } = usePostProfileImage();
  const { mutate: useDeleteProfileImageMutate } = useDeleteProfileImage();
  const { mutate: usePatchNicknameMutate } = usePatchNickname();

  const makePreviewImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileLoading(true);

    const file = e.target.files?.[0];
    if (!file) return;

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    const extension = file.type.split("/").at(-1);
    if (extension === "heic" || extension === "HEIC") {
      const heic2any = (await import("heic2any")).default;

      const result = await heic2any({ blob: file, toType: "image/jpeg" });
      const jpegFile = new File([result as Blob], makeFileName("jpeg"), {
        type: "image/jpeg",
        lastModified: new Date().getTime(),
      });

      const compressedFile = await imageCompression(jpegFile, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setProfileLoading(false);
        setValue("profile", compressedFile);
      };

      return;
    }
    const compressedFile = await imageCompression(file, options);

    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      setProfileLoading(false);
      setValue("profile", compressedFile);
    };
  };

  const handleClickDeleteProfile = () => {
    setValue("profile", "");
    setPreviewUrl("");
  };

  const updateProfile = (data: DefaultInfoForm) => {
    if (data.nickname !== profile?.nickname && data.nickname) {
      usePatchNicknameMutate(
        { body: { nickname: data.nickname } },
        { onSuccess: () => toast.success("닉네임이 변경되었습니다 :)") },
      );
    }

    if (typeof watch("profile") === "object") {
      const profileImage = data.profile as File;

      const formData = new FormData();
      formData.append("file", profileImage);

      usePostProfileImageMutate(formData, {
        onSuccess: () => {
          queryClient.invalidateQueries(loginKeys.myProfile);
          toast.success("프로필 이미지가 수정되었습니다 :)");
        },
        onError: () => toast.success("프로필 이미지 수정을 실패했습니다 :)"),
      });
    } else if (watch("profile") === "") {
      useDeleteProfileImageMutate(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries(loginKeys.myProfile);
          toast.success("프로필 이미지가 삭제 되었습니다 :)");
        },
        onError: () => toast.success("프로필 이미지 삭제를 실패했습니다 :)"),
      });
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
        isProfileLoading={isProfileLoading}
        previewUrl={previewUrl}
        src={profile.profile_image}
        alt={`${watch("nickname")}의 프로필 사진`}
        watch={watch}
        register={register("profile", {
          onChange: makePreviewImg,
        })}
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
          !(watch("profile") instanceof Blob) &&
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
