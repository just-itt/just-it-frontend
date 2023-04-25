import React, { ChangeEvent } from "react";
import Image from "next/image";

import { PencilIcon, PersonIcon, PictureIcon, TrashIcon } from "@icons/index";
import * as S from "./SetProfile.styled";

interface SetProfileProps {
  src: string | null;
  alt: string;
  changeProfileString: string | null;
  handleChangeProfile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteProfile: () => void;
}

const SetProfile = ({
  src,
  alt,
  changeProfileString,
  handleChangeProfile,
  handleDeleteProfile,
}: SetProfileProps) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        {changeProfileString ? (
          <Image
            src={changeProfileString}
            alt="변경 할 프로필 사진"
            layout="responsive"
            width={1}
            height={1}
          />
        ) : changeProfileString === "" ? (
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
        onChange={handleChangeProfile}
      />
      <S.LabelWrapper>
        <S.Label htmlFor="profile">
          {(src || changeProfileString) && changeProfileString !== "" ? (
            <PencilIcon />
          ) : (
            <PictureIcon />
          )}
        </S.Label>
        {(src || changeProfileString) && changeProfileString !== "" && (
          <S.DeleteBtn onClick={handleDeleteProfile}>
            <TrashIcon type="button" />
          </S.DeleteBtn>
        )}
      </S.LabelWrapper>
    </S.Wrapper>
  );
};

export default SetProfile;
