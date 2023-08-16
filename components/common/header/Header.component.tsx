import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import { Profile } from "@components/index";
import { useGetMyProfile } from "@service/index";
import { navAtom } from "@recoil/index";
import { useViewport } from "@hooks/index";
import {
  AddIcon,
  LogoShortIcon,
  MenuIcon,
  SearchShortIcon,
} from "@icons/index";
import * as S from "./Header.styled";

const Header = () => {
  const { push, query } = useRouter();

  const { data: profile } = useGetMyProfile();

  const { isMobile, isTablet, isDesktop } = useViewport();

  const { register, watch, setValue, handleSubmit } = useForm({
    mode: "all",
    defaultValues: { searchWord: query.searchWord || "" },
  });

  const setNavState = useSetRecoilState(navAtom);
  const [isFocusInput, setIsFocusInput] = useState(false);

  const handleClickMenu = () => {
    setNavState(true);
    document.body.style.overflow = "hidden";
  };

  const handleFocusInput = () => setIsFocusInput(!isFocusInput);

  useEffect(() => {
    setValue("searchWord", query.searchWord || "");
  }, [query]);

  return (
    <S.Header>
      {isMobile &&
        (isFocusInput ? (
          <S.SearchWrapper
            onSubmit={handleSubmit(({ searchWord }) =>
              push({ query: { searchWord } }),
            )}
          >
            <SearchShortIcon />
            <S.Search
              placeholder="검색..."
              maxLength={30}
              autoComplete="off"
              autoFocus
              value={watch("searchWord")}
              {...register("searchWord", {
                required: true,
                onBlur: () => handleFocusInput(),
              })}
            />
          </S.SearchWrapper>
        ) : (
          <>
            <S.LogoWrapper>
              <S.MenuBtn type="button" onClick={handleClickMenu}>
                <MenuIcon />
              </S.MenuBtn>
              <Link href="/">
                <LogoShortIcon />
              </Link>
            </S.LogoWrapper>
            <S.FlexWrapper>
              <S.SearchBtn type="button" onClick={handleFocusInput}>
                <SearchShortIcon />
              </S.SearchBtn>
              {profile ? (
                <Link css={S.createPheedBtn} href="/createPheed">
                  <AddIcon />
                </Link>
              ) : (
                <Link css={S.loginBtn} href="/login">
                  로그인
                </Link>
              )}
            </S.FlexWrapper>
          </>
        ))}
      {isTablet && (
        <>
          <S.LogoWrapper>
            <S.MenuBtn type="button" onClick={handleClickMenu}>
              <MenuIcon />
            </S.MenuBtn>
            <Link href="/">
              <LogoShortIcon />
            </Link>
          </S.LogoWrapper>
          <S.FlexWrapper>
            {isFocusInput ? (
              <S.SearchWrapper
                onSubmit={handleSubmit(({ searchWord }) =>
                  push({ query: { searchWord } }),
                )}
              >
                <SearchShortIcon />
                <S.Search
                  placeholder="검색..."
                  maxLength={30}
                  autoComplete="off"
                  autoFocus
                  value={watch("searchWord")}
                  {...register("searchWord", {
                    required: true,
                    onBlur: () => handleFocusInput(),
                  })}
                />
              </S.SearchWrapper>
            ) : (
              <S.SearchBtn type="button" onClick={handleFocusInput}>
                <SearchShortIcon />
              </S.SearchBtn>
            )}

            {profile ? (
              <Link css={S.createPheedBtn} href="/createPheed">
                <AddIcon />
              </Link>
            ) : (
              <Link css={S.loginBtn} href="/login">
                로그인
              </Link>
            )}
          </S.FlexWrapper>
        </>
      )}
      {isDesktop && (
        <>
          <S.LogoWrapper>
            <S.MenuBtn type="button" onClick={handleClickMenu}>
              <MenuIcon />
            </S.MenuBtn>
            <Link href="/">
              <LogoShortIcon />
            </Link>
          </S.LogoWrapper>
          <S.SearchWrapper
            onSubmit={handleSubmit(({ searchWord }) =>
              push({ query: { searchWord } }),
            )}
          >
            <SearchShortIcon />
            <S.Search
              placeholder="검색..."
              maxLength={30}
              autoComplete="off"
              value={watch("searchWord")}
              {...register("searchWord", {
                required: true,
                onBlur: () => handleFocusInput(),
              })}
            />
          </S.SearchWrapper>
          <S.FlexWrapper>
            {profile ? (
              <>
                <Link css={S.createPheed} href="/createPheed">
                  새 글 올리기
                </Link>
                <Link href="/setting">
                  <Profile
                    css={S.profile}
                    src={profile.profile_image}
                    alt={`${profile.nickname}님의 프로필 사진`}
                  />
                </Link>
              </>
            ) : (
              <Link css={S.loginBtn} href="/login">
                로그인
              </Link>
            )}
          </S.FlexWrapper>
        </>
      )}
    </S.Header>
  );
};

export default Header;
