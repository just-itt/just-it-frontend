import React from "react";
import Image from "next/image";

import { PersonIcon } from "@icons/index";
import * as S from "./Profile.styled";

interface ProfileProps {
  className?: string;
  src: string | null;
  alt: string;
}

const Profile = ({ className, src, alt }: ProfileProps) => {
  return (
    <S.Wrapper className={className}>
      {src ? (
        <Image src={src} alt={alt} width={1} height={1} layout="responsive" />
      ) : (
        <PersonIcon />
      )}
    </S.Wrapper>
  );
};

export default Profile;