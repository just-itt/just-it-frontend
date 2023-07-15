import React from "react";
import Cookies from "js-cookie";

import { FilterModal, Heading, LoginLinkModal, Pheed } from "@components/index";
import { useGetCustomTags, useGetPheeds } from "@service/index";
import { useModal } from "@hooks/index";
import { FilterIcon } from "@icons/index";
import * as S from "./SuggestedMenu.styled";

const SuggestedMenu = () => {
  const { handleOpenModal } = useModal();

  const { data: customTags } = useGetCustomTags(!!Cookies.get("auth"));
  const { data } = useGetPheeds(
    { query: { tag_options: customTags?.tag_options.map(item => item.id) } },
    !!customTags?.tag_options || !!Cookies.get("auth"),
  );

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
        {data?.map(pheed => (
          <Pheed
            key={pheed.id}
            src={pheed.image.image}
            title={pheed.title}
            id={pheed.id}
          />
        ))}
      </S.PheedWrapper>
    </S.SuggestedMenu>
  );
};

export default SuggestedMenu;
