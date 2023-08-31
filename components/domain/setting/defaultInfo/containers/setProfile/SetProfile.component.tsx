import React from "react";
import Image from "next/image";
import type { UseFormRegisterReturn, UseFormWatch } from "react-hook-form";

import { Spinner } from "@components/common";
import { PencilIcon, PersonIcon, PictureIcon, TrashIcon } from "@icons/index";
import type { DefaultInfoForm } from "types";
import * as S from "./SetProfile.styled";

interface SetProfileProps {
  previewUrl: string;
  isProfileLoading: boolean;
  src: string | null;
  alt: string;
  watch: UseFormWatch<DefaultInfoForm>;
  register: UseFormRegisterReturn<"profile">;
  handleDeleteProfile: () => void;
}

const SetProfile = ({
  previewUrl,
  isProfileLoading,
  src,
  alt,
  watch,
  register,
  handleDeleteProfile,
}: SetProfileProps) => {
  const isNewProfile = watch("profile") instanceof Blob;

  return (
    <S.Wrapper>
      <S.IconWrapper>
        {isProfileLoading ? (
          <Spinner size="20px" color="gray" />
        ) : previewUrl ? (
          <Image
            src={previewUrl}
            alt="변경 할 프로필 사진"
            layout="responsive"
            width={1}
            height={1}
          />
        ) : watch("profile") === "" ? (
          <PersonIcon css={S.personIcon} aria-label="기본 프로필 이미지" />
        ) : src ? (
          <Image
            aria-label="내 프로필 이미지"
            src={src}
            alt={alt}
            layout="responsive"
            width={1}
            height={1}
          />
        ) : (
          <PersonIcon css={S.personIcon} aria-label="기본 프로필 이미지" />
        )}
      </S.IconWrapper>
      <S.ProfileInput
        type="file"
        accept=".jpg, .jpeg, .png, .heic"
        id="profile"
        {...register}
      />
      <S.LabelWrapper>
        <S.Label htmlFor="profile">
          {src || isNewProfile ? (
            <PencilIcon aria-label="프로필 이미지 수정 버튼" />
          ) : (
            <PictureIcon aria-label="프로필 이미지 추가 버튼" />
          )}
        </S.Label>
        {(src || isNewProfile) && (
          <S.DeleteBtn type="button" onClick={handleDeleteProfile}>
            <TrashIcon aria-label="프로필 이미지 삭제 버튼" />
          </S.DeleteBtn>
        )}
      </S.LabelWrapper>
    </S.Wrapper>
  );
};

export default SetProfile;
