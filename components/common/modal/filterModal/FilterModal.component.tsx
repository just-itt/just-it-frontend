import React from "react";

import { LabelContent } from "@components/index";
import { useModal } from "@hooks/index";
import { CloseIcon } from "@icons/index";
import {
  DAY_OF_THE_WEEKS,
  EMOTIONS,
  FOOD_CATEGORIES,
  MOODS,
  SEASONS,
  TIME_ZONES,
  WEATHERS,
  WHO_WITHS,
} from "assets/filter";
import * as S from "./FilterModal.styled";

const FilterModal = () => {
  const { modalRef, isOpenModal, handleCloseModal } = useModal();

  const handleSaveFilter = () => {
    handleCloseModal();
  };

  return (
    <S.Modal open={isOpenModal} ref={modalRef}>
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
        <LabelContent label="# 종류">
          <S.FilterWrapper>
            {FOOD_CATEGORIES.map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 시간">
          <S.FilterWrapper>
            {[...DAY_OF_THE_WEEKS, ...TIME_ZONES].map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 누구와">
          <S.FilterWrapper>
            {WHO_WITHS.map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 기분">
          <S.FilterWrapper>
            {EMOTIONS.map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 날씨">
          <S.FilterWrapper>
            {WEATHERS.map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 계절">
          <S.FilterWrapper>
            {SEASONS.map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 분위기">
          <S.FilterWrapper>
            {MOODS.map(item => (
              <S.FilterItem key={item.key} isSelect={false}>
                {item.label}
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
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
