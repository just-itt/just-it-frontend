import React from "react";
import Cookies from "js-cookie";

import { FilterModal, Heading, Pheed } from "@components/index";
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

  return (
    <S.SuggestedMenu>
      <S.HeadingWrapper>
        <Heading heading="오늘의 추천 메뉴" />
        <S.FilterSettingBtn
          type="button"
          onClick={handleOpenModal(<FilterModal />)}
        >
          <FilterIcon />
          <span>필터 설정</span>
        </S.FilterSettingBtn>
      </S.HeadingWrapper>
      <S.PheedWrapper>
        {data?.map(pheed => (
          <Pheed src={pheed.image.image} title={pheed.title} id={pheed.id} />
        ))}
      </S.PheedWrapper>
    </S.SuggestedMenu>
  );
};

export default SuggestedMenu;
