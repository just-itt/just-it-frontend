import React from "react";
import Cookies from "js-cookie";

import {
  FilterModal,
  Heading,
  LoginLinkModal,
  Pheed,
  Spinner,
} from "@components/index";
import { useGetSuggestedPheeds } from "@service/index";
import { useModal } from "@hooks/index";
import { ClearIcon, FilterIcon } from "@icons/index";
import * as S from "./SuggestedMenu.styled";

const SuggestedMenu = () => {
  const { handleOpenModal } = useModal();

  const {
    data: suggestedPheeds,
    refetch,
    isFetching,
  } = useGetSuggestedPheeds();

  const handleFilterModal = () => {
    handleOpenModal(
      Cookies.get("auth") ? <FilterModal /> : <LoginLinkModal />,
    )();
  };

  const handleRefetch = () => refetch();

  return (
    <S.SuggestedMenu>
      <S.HeadingWrapper>
        <Heading heading="오늘의 추천 메뉴" />
        <S.FilterSettingBtn type="button" onClick={handleFilterModal}>
          <FilterIcon />
          <S.FilterSetting>필터 설정</S.FilterSetting>
        </S.FilterSettingBtn>
        <S.MobileFilterResetBtn
          type="button"
          disabled={isFetching}
          onClick={handleRefetch}
        >
          <ClearIcon />
        </S.MobileFilterResetBtn>
      </S.HeadingWrapper>
      <S.PheedWrapper>
        {suggestedPheeds?.items?.map((pheed, i) => (
          <Pheed
            key={i}
            src={pheed.image.image}
            title={pheed.title}
            id={pheed.id}
            isShowTitle={false}
          />
        ))}
      </S.PheedWrapper>
      <S.ReloadBtnWrapper>
        <S.ReloadBtn
          type="button"
          isLoading={isFetching}
          disabled={isFetching}
          onClick={handleRefetch}
        >
          {suggestedPheeds && isFetching ? (
            <Spinner color="000000" />
          ) : (
            <>
              <ClearIcon /> 새로 불러오기
            </>
          )}
        </S.ReloadBtn>
      </S.ReloadBtnWrapper>
    </S.SuggestedMenu>
  );
};

export default SuggestedMenu;
