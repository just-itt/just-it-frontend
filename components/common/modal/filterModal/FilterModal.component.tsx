import React, { useEffect } from "react";

import { LabelContent } from "@components/index";
import { CloseIcon } from "@icons/index";
import { EMOJI } from "assets/filter";
import { handleResize } from "utils";
import { useTag } from "./hooks";
import * as S from "./FilterModal.styled";

const FILTER_TITLES = [
  "# 종류",
  "# 시간",
  "# 누구와",
  "# 기분",
  "# 날씨, 계절",
  "# 분위기",
];

const FilterModal = () => {
  const {
    tags,
    selectTags,
    handleClickTag,
    handleSaveFilter,
    handleCloseModal,
  } = useTag();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Modal>
      <S.HeadingWrapper>
        <S.Heading>맞춤필터 설정</S.Heading>
        <S.CloseBtn type="button" onClick={handleCloseModal}>
          <CloseIcon />
        </S.CloseBtn>
      </S.HeadingWrapper>
      <S.Body>
        {/* <LabelContent label="필터명">
          <S.Input placeholder="예) 오늘의 맞춤 필터" />
        </LabelContent> */}
        {FILTER_TITLES.map((filterTitle, i) => (
          <LabelContent css={S.label} label={filterTitle} key={i}>
            <S.FilterWrapper>
              {tags?.[i].options.map(({ id, title }) => (
                <S.FilterItem
                  key={id}
                  isSelect={selectTags.includes(`${id}`)}
                  onClick={handleClickTag(id)}
                >
                  {`${EMOJI[title] ?? `🆕`} ${title}`}
                </S.FilterItem>
              ))}
            </S.FilterWrapper>
          </LabelContent>
        ))}
      </S.Body>
      <S.BtnWrapper>
        <S.ConfirmBtn type="button" onClick={handleSaveFilter}>
          저장하기
        </S.ConfirmBtn>
      </S.BtnWrapper>
    </S.Modal>
  );
};

export default FilterModal;
