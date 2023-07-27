import React from "react";
import Cookies from "js-cookie";

import {
  FilterModal,
  Heading,
  LoginLinkModal,
  Pheed,
  Spinner,
} from "@components/index";
import { useGetCustomTags, useGetSuggestedPheeds } from "@service/index";
import { useModal } from "@hooks/index";
import { ClearIcon, FilterIcon } from "@icons/index";
import * as S from "./SuggestedMenu.styled";

const SuggestedMenu = () => {
  const { handleOpenModal } = useModal();

  const { data: customTags } = useGetCustomTags(!!Cookies.get("auth"));
  const {
    data: suggestedPheeds,
    refetch,
    isFetching,
  } = useGetSuggestedPheeds(!!customTags?.tag_options || !!Cookies.get("auth"));

  const handleFilterModal = () => {
    handleOpenModal(
      Cookies.get("auth") ? <FilterModal /> : <LoginLinkModal />,
    )();
  };

  return (
    <S.SuggestedMenu>
      <S.HeadingWrapper>
        <Heading heading="오늘의 추천 메뉴" />
        <S.FilterSettingBtn type="button" onClick={handleFilterModal}>
          <FilterIcon />
          <span>필터 설정</span>
        </S.FilterSettingBtn>
      </S.HeadingWrapper>
      <S.PheedWrapper>
        {suggestedPheeds?.items?.map(pheed => (
          <Pheed
            key={pheed.id}
            src={pheed.image.image}
            title={pheed.title}
            id={pheed.id}
          />
        ))}
      </S.PheedWrapper>
      <S.ReloadBtnWrapper>
        <S.ReloadBtn
          type="button"
          isLoading={isFetching}
          disabled={isFetching}
          onClick={() => refetch()}
        >
          {isFetching ? (
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
