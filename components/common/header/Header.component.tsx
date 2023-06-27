import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Profile } from "@components/index";
import { profileAtom, navAtom } from "@recoil/common";
import { useViewport } from "@hooks/index";
import {
  AddIcon,
  LogoShortIcon,
  MenuIcon,
  SearchShortIcon,
} from "@icons/index";
import { LoginBtn, SearchForm } from "./container";
import * as S from "./Header.styled";

const Header = () => {
  const { replace, query } = useRouter();

  const { isMobile, isTablet, isDesktop } = useViewport();

  const { register, reset, handleSubmit } = useForm({
    mode: "all",
    defaultValues: { pheedSearch: "" },
  });

  const [profileState] = useRecoilState(profileAtom);
  const setNavState = useSetRecoilState(navAtom);

  const [isFocusInput, setIsFocusInput] = useState(false);

  const handleClickMenu = () => {
    setNavState(true);
    document.body.style.overflow = "hidden";
  };

  const handleFocusInput = () => setIsFocusInput(!isFocusInput);

  return (
    <S.Header>
      {isMobile &&
        (isFocusInput ? (
          <S.SearchWrapper
            onSubmit={handleSubmit(data =>
              replace({ query: { ...query, pheedSearch: data.pheedSearch } }),
            )}
          >
            <SearchShortIcon />
            <S.Search
              placeholder="검색..."
              maxLength={30}
              autoComplete="off"
              autoFocus
              {...register("pheedSearch", {
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
              {profileState.nickname ? (
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
                onSubmit={handleSubmit(data =>
                  replace({
                    query: { ...query, pheedSearch: data.pheedSearch },
                  }),
                )}
              >
                <SearchShortIcon />
                <S.Search
                  placeholder="검색..."
                  maxLength={30}
                  autoComplete="off"
                  autoFocus
                  {...register("pheedSearch", {
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

            {profileState.nickname ? (
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
            onSubmit={handleSubmit(data =>
              replace({ query: { ...query, pheedSearch: data.pheedSearch } }),
            )}
          >
            <SearchShortIcon />
            <S.Search
              placeholder="검색..."
              maxLength={30}
              autoComplete="off"
              autoFocus
              {...register("pheedSearch", {
                required: true,
                onBlur: () => handleFocusInput(),
              })}
            />
          </S.SearchWrapper>
          <S.FlexWrapper>
            {profileState.nickname ? (
              <>
                <Link css={S.createPheed} href="/createPheed">
                  새 글 올리기
                </Link>
                <Link href="/setting">
                  <Profile
                    src={profileState.profileImage}
                    alt={`${profileState.nickname}님의 프로필 사진`}
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
