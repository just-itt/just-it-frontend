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
        ) : isNewProfile ? (
          <Image
            src={previewUrl}
            alt="변경 할 프로필 사진"
            layout="responsive"
            width={1}
            height={1}
          />
        ) : typeof watch("profile") === "string" && watch("profile") === "" ? (
          <PersonIcon css={S.personIcon} />
        ) : src ? (
          <Image src={src} alt={alt} layout="responsive" width={1} height={1} />
        ) : (
          <PersonIcon css={S.personIcon} />
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
          {src || isNewProfile ? <PencilIcon /> : <PictureIcon />}
        </S.Label>
        {(src || isNewProfile) && (
          <S.DeleteBtn onClick={handleDeleteProfile}>
            <TrashIcon type="button" />
          </S.DeleteBtn>
        )}
      </S.LabelWrapper>
    </S.Wrapper>
  );
};

export default SetProfile;
