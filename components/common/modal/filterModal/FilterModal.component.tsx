import React from "react";

import { LabelContent } from "@components/index";
import { useModal } from "@hooks/index";
import { CloseIcon } from "@icons/index";
import * as S from "./FilterModal.styled";

const FilterModal = () => {
  const { handleCloseModal } = useModal();

  const FILTER = [
    { key: "해장", label: "얼큰한 해장이 필요 🍏" },
    { key: "한식", label: "한식 🍚" },
    { key: "비오는날", label: "비오는 날 ☔️" },
    { key: "패스트푸드", label: "패스트푸드 🍔" },
    { key: "해장", label: "얼큰한 해장이 필요 🍏" },
    { key: "한식", label: "한식 🍚" },
    { key: "비오는날", label: "비오는 날 ☔️" },
    { key: "패스트푸드", label: "패스트푸드 🍔" },
  ];

  const handleSaveFilter = () => {
    handleCloseModal();
  };

  return (
    <S.Modal open>
      <S.HeadingWrapper>
        <S.Heading>맞춤필터 설정</S.Heading>
        <S.CloseBtn type="button" onClick={handleCloseModal}>
          <CloseIcon />
        </S.CloseBtn>
      </S.HeadingWrapper>
      <S.Body>
        <LabelContent label="필터명">
          <S.Input placeholder="예) 오늘의 맞춤 필터" />
        </LabelContent>
        <LabelContent label="# 음식종류">
          <S.FilterWrapper>
            {FILTER.map((item, i) => (
              <S.FilterItem key={i}>{item.label}</S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 테마">
          <S.FilterWrapper>
            {FILTER.map((item, i) => (
              <S.FilterItem key={i}>{item.label}</S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <LabelContent label="# 테마">
          <S.FilterWrapper>
            {FILTER.map((item, i) => (
              <S.FilterItem key={i}>{item.label}</S.FilterItem>
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
