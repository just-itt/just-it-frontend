import React from "react";

import { LabelContent } from "@components/index";
import { useGetTags } from "@service/index";
import * as S from "./CreatePheedFilter.styled";

interface CreatePheedFilterProps {
  handleClickFilter: (id: number) => () => void;
  handleTitle: (e: any) => void;
  handleContent: (e: any) => void;
}

const CreatePheedFilter = ({
  handleClickFilter,
  handleTitle,
  handleContent,
}: CreatePheedFilterProps) => {
  const { data } = useGetTags();

  return (
    <S.ContentWrapper>
      <LabelContent css={S.margin} label="글 제목 (필수)">
        <LabelContent.Input
          placeholder="음식 이름 입력..."
          handleChange={handleTitle}
        />
      </LabelContent>
      <LabelContent css={S.margin} label="설명">
        <LabelContent.Textarea
          css={S.textArea}
          placeholder="공유할 음식에 대해 자유롭게 설명해 주세요"
          handleChange={handleContent}
        />
      </LabelContent>
      <LabelContent css={S.margin} label={data?.[0].title}>
        <S.FilterWrapper>
          {data?.[0].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem type="button" onClick={handleClickFilter(id)}>
                {title}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label={data?.[1].title}>
        <S.FilterWrapper>
          {data?.[1].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem type="button" onClick={handleClickFilter(id)}>
                {title}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label={data?.[2].title}>
        <S.FilterWrapper>
          {data?.[2].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem type="button" onClick={handleClickFilter(id)}>
                {title}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label="그 때의 기억을 떠올려 보세요!">
        분위기
      </LabelContent>
      <LabelContent css={S.margin} label="그 때의 기억을 떠올려 보세요!">
        분위기
      </LabelContent>
    </S.ContentWrapper>
  );
};

export default CreatePheedFilter;
