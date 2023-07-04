import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";

import { navAtom, profileAtom } from "@recoil/common";
import { LoginLinkModal, Profile } from "@components/index";
import { useModal } from "@hooks/index";
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
  const { pathname, push } = useRouter();

  const [navState, setNavState] = useRecoilState(navAtom);
  const profile = useRecoilValue(profileAtom);

  const { handleOpenModal } = useModal();

  const handleCloseNav = () => {
    setNavState(false);
    document.body.style.removeProperty("overflow");
  };

  const handleCheckLogin = (path: string) => () => {
    if (path === "/") push(path);
    if (!profile.nickname) {
      handleCloseNav();
      handleOpenModal(<LoginLinkModal />)();
    }
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
        <S.NavMenu
          type="button"
          isclick={(pathname === "/").toString()}
          onClick={handleCheckLogin("/")}
        >
          <TagIcon />
          탐색하기
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          type="button"
          isclick={(pathname === "/myPheed").toString()}
          onClick={handleCheckLogin("/myPheed")}
        >
          <EditMonoIcon />내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          type="button"
          isclick={(pathname === "/bookMark").toString()}
          onClick={handleCheckLogin("/bookMark")}
        >
          <BookMarkMonoIcon />
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          type="button"
          isclick={(pathname === "/setting").toString()}
          onClick={handleCheckLogin("/setting")}
        >
          <SettingMonoIcon />
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
