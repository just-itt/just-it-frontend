import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";

import { navAtom, profileAtom } from "@recoil/common";
import { Profile } from "@components/index";
import {
  ArrowShortIcon,
  BookMarkMonoIcon,
  CloseIcon,
  EditMonoIcon,
  LogoShortIcon,
  SettingMonoIcon,
  TagIcon,
} from "@icons/index";
import * as S from "./Nav.styled";

const Nav = () => {
  const { pathname } = useRouter();

  const [navState, setNavState] = useRecoilState(navAtom);
  const profile = useRecoilValue(profileAtom);

  const handleCloseNav = () => {
    setNavState(false);
    document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    handleCloseNav();
  }, [pathname]);

  return (
    <S.Nav isOpen={navState}>
      <S.Wrapper>
        <LogoShortIcon />
        <S.CloseBtn type="button" onClick={handleCloseNav}>
          <CloseIcon />
        </S.CloseBtn>
      </S.Wrapper>
      <S.ProfileWrapper>
        {profile.nickname ? (
          <>
            <Profile
              css={S.profile}
              src={profile.profileImage}
              alt={`${profile.nickname}님의 프로필 사진`}
            />
            {profile.nickname}
          </>
        ) : (
          <Link href="/login" onClick={handleCloseNav}>
            <Profile css={S.profile} src={null} alt="비어있는 프로필 이미지" />
            로그인하기
            <ArrowShortIcon />
          </Link>
        )}
      </S.ProfileWrapper>
      <S.NavItem>
        <S.NavMenu href="/" isclick={(pathname === "/").toString()}>
          <TagIcon />
          탐색하기
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="myPheed"
          isclick={(pathname === "/myPheed").toString()}
        >
          <EditMonoIcon />내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="bookMark"
          isclick={(pathname === "/bookMark").toString()}
        >
          <BookMarkMonoIcon />
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          href="setting"
          isclick={(pathname === "/setting").toString()}
        >
          <SettingMonoIcon />
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
