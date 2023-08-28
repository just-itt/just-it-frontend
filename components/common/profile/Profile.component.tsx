import React from "react";
import Image from "next/image";

import { useImageError } from "@hooks/index";
import { PersonIcon } from "@icons/index";
import * as S from "./Profile.styled";

interface ProfileProps {
  className?: string;
  src: string | null;
  alt: string;
}

const Profile = ({ className, src, alt }: ProfileProps) => {
  const { errorImage, isImageError, handleErrorImg, IMAGE_ERROR_MESSAGE } =
    useImageError();

  return (
    <S.Wrapper className={className} hasProfile={!!src}>
      {src ? (
        <Image
          src={isImageError ? errorImage : src}
          alt={isImageError ? IMAGE_ERROR_MESSAGE : alt}
          fill
          style={{ objectFit: "cover" }}
          onError={handleErrorImg}
        />
      ) : (
        <PersonIcon />
      )}
    </S.Wrapper>
  );
};

export default Profile;
