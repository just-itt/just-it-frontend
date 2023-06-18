import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";

import { Profile } from "@components/index";
import { profileAtom, navAtom } from "@recoil/common";
import { useViewport } from "@hooks/index";
import {
  LogoShortIcon,
  MenuIcon,
  SearchLongIcon,
  SearchShortIcon,
} from "@icons/index";
import * as S from "./Header.styled";

const Header = () => {
  const { replace, query } = useRouter();

  const { isMobile, isTablet, isDesktop } = useViewport();

  const [profileState] = useRecoilState(profileAtom);
  const setNavState = useSetRecoilState(navAtom);

  const { register, reset, handleSubmit } = useForm({
    mode: "all",
    defaultValues: { pheedSearch: "" },
  });

  const handleClickMenu = () => {
    setNavState(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    reset({ pheedSearch: (query.pheedSearch as string) ?? "" });
  }, [query]);

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.MenuBtn type="button" onClick={handleClickMenu}>
          <MenuIcon />
        </S.MenuBtn>
        <Link href="/">
          <LogoShortIcon />
        </Link>
      </S.LogoWrapper>
      {isMobile && profileState.id && (
        <S.MobileLoginWrapper>
          <button type="button">
            <SearchLongIcon />
          </button>
          <Link href="/setting">
            <Profile
              src={profileState.profileImage}
              alt={`${profileState.nickname}님의 프로필 사진`}
            />
          </Link>
        </S.MobileLoginWrapper>
      )}
      {isMobile && !profileState.id && (
        <S.MobileLoginWrapper>
          <button type="button">
            <SearchLongIcon />
          </button>
          <S.LoginBtn href="/login">로그인</S.LoginBtn>
        </S.MobileLoginWrapper>
      )}
      {(isTablet || isDesktop) && profileState.id && (
        <>
          <S.SearchWrapper
            onSubmit={handleSubmit(data =>
              replace({ query: { ...query, pheedSearch: data.pheedSearch } }),
            )}
          >
            <SearchShortIcon />
            <S.Search
              placeholder="검색..."
              maxLength={30}
              {...register("pheedSearch", { required: true })}
            />
          </S.SearchWrapper>
          <S.FlexWrapper>
            <S.CreatePheed href="/createPheed">새 글 등록</S.CreatePheed>
            <S.ProfileLink href="setting">
              <Profile
                src={profileState.profileImage}
                alt={`${profileState.nickname}의 프로필 사진`}
              />
            </S.ProfileLink>
          </S.FlexWrapper>
        </>
      )}
      {(isTablet || isDesktop) && !profileState.id && (
        <>
          <S.SearchWrapper
            onSubmit={handleSubmit(data =>
              replace({ query: { ...query, pheedSearch: data.pheedSearch } }),
            )}
          >
            <SearchShortIcon />
            <S.Search
              placeholder="검색..."
              maxLength={30}
              {...register("pheedSearch", { required: true })}
            />
          </S.SearchWrapper>
          <S.FlexWrapper>
            <S.LoginBtn href="/login">로그인</S.LoginBtn>
          </S.FlexWrapper>
        </>
      )}
    </S.Header>
  );
};

export default Header;
