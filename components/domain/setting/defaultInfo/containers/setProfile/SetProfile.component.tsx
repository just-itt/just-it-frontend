import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { UseFormRegisterReturn, UseFormWatch } from "react-hook-form";

import { makeImagePreview } from "utils/index";
import { PencilIcon, PersonIcon, PictureIcon, TrashIcon } from "@icons/index";
import * as S from "./SetProfile.styled";

interface SetProfileProps {
  src: string | null;
  alt: string;
  watch: UseFormWatch<{
    profile: string | FileList | null;
    nickname: string;
    email: string;
  }>;
  register: UseFormRegisterReturn<"profile">;
  handleDeleteProfile: () => void;
}

const SetProfile = ({
  src,
  alt,
  watch,
  register,
  handleDeleteProfile,
}: SetProfileProps) => {
  const [previewUrl, setPreviewUrl] = useState("");

  const isNewProfile = watch("profile") instanceof FileList;

  useEffect(() => {
    if (isNewProfile) {
      const file = watch("profile")?.[0] as File;
      makeImagePreview(file).then(res => setPreviewUrl(res));
    }
  }, [watch("profile")]);

  return (
    <S.Wrapper>
      <S.IconWrapper>
        {isNewProfile ? (
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
        accept=".jpeg, .jpg, .png"
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
