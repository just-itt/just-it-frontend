import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { navAtom } from "@recoil/common";
import { LoginLinkModal, Profile } from "@components/index";
import { useGetMyProfile } from "@service/index";
import { useModal } from "@hooks/index";
import {
  ArrowShortIcon,
  BookmarkFullIcon,
  CloseIcon,
  EditMonoIcon,
  LogoShortIcon,
  SettingMonoIcon,
  TagIcon,
} from "@icons/index";
import * as S from "./Nav.styled";

const Nav = () => {
  const { pathname, push } = useRouter();

  const { handleOpenModal } = useModal();

  const [navState, setNavState] = useRecoilState(navAtom);
  const { data: profile } = useGetMyProfile();

  const handleCloseNav = () => {
    setNavState(false);
    document.body.style.removeProperty("overflow");
  };

  const handleCheckLogin = (path: string) => () => {
    if (path === "/") {
      push(path);
      handleCloseNav();
      return;
    }

    if (profile) {
      push(path);
    } else {
      handleOpenModal(<LoginLinkModal />)();
    }
    handleCloseNav();
  };

  return (
    <S.Nav isOpen={navState}>
      <S.Wrapper>
        <LogoShortIcon />
        <S.CloseBtn
          aria-label="Nav메뉴 닫기"
          type="button"
          onClick={handleCloseNav}
        >
          <CloseIcon />
        </S.CloseBtn>
      </S.Wrapper>
      <S.ProfileWrapper>
        {profile ? (
          <>
            <Profile
              css={S.profile}
              src={profile.profile_image}
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
          <S.IconWrapper>
            <TagIcon />
          </S.IconWrapper>
          탐색하기
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          type="button"
          isclick={(pathname === "/myPheed").toString()}
          onClick={handleCheckLogin("/myPheed")}
        >
          <S.IconWrapper>
            <EditMonoIcon />
          </S.IconWrapper>
          내 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          type="button"
          isclick={(pathname === "/bookmark").toString()}
          onClick={handleCheckLogin("/bookmark")}
        >
          <S.IconWrapper>
            <BookmarkFullIcon />
          </S.IconWrapper>
          저장한 게시글
        </S.NavMenu>
      </S.NavItem>
      <S.NavItem>
        <S.NavMenu
          type="button"
          isclick={(pathname === "/setting").toString()}
          onClick={handleCheckLogin("/setting")}
        >
          <S.IconWrapper>
            <SettingMonoIcon />
          </S.IconWrapper>
          설정
        </S.NavMenu>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
