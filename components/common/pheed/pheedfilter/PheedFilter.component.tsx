import React from "react";
import type { UseFormRegister } from "react-hook-form";

import { LabelContent } from "@components/index";
import { useGetTags } from "@service/index";
import { EMOJI } from "assets/filter";
import * as S from "./PheedFilter.styled";

interface CreatePheedFilterProps {
  register: UseFormRegister<any>;
  watch: any;
  handleClickFilter: (key: "what" | "when" | "who", id: number) => () => void;
}

const CreatePheedFilter = ({
  register,
  watch,
  handleClickFilter,
}: CreatePheedFilterProps) => {
  const { data } = useGetTags();

  return (
    <S.ContentWrapper>
      <LabelContent css={S.margin} label="글 제목  (필수)">
        <LabelContent.Input
          placeholder="음식 이름 입력..."
          register={register("title", {
            required: true,
          })}
        />
      </LabelContent>
      <LabelContent css={S.margin} label="설명">
        <LabelContent.Textarea
          css={S.textArea}
          placeholder="공유할 음식에 대해 자유롭게 설명해 주세요"
          register={register("content", {
            required: true,
          })}
        />
      </LabelContent>
      <LabelContent css={S.margin} label="무엇을 먹었나요? (필수)">
        <S.FilterWrapper>
          {data?.[0].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem
                type="button"
                isSelect={watch("tagOptions").what.includes(id)}
                onClick={handleClickFilter("what", id)}
              >
                {`${EMOJI[title]} ${title}`}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label="언제 먹었나요? (필수)">
        <S.FilterWrapper>
          {data?.[1].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem
                type="button"
                isSelect={watch("tagOptions").when.includes(id)}
                onClick={handleClickFilter("when", id)}
              >
                {`${EMOJI[title]} ${title}`}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label="누구랑 먹었나요? (필수)">
        <S.FilterWrapper>
          {data?.[2].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem
                type="button"
                isSelect={watch("tagOptions").who.includes(id)}
                onClick={handleClickFilter("who", id)}
              >
                {`${EMOJI[title]} ${title}`}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label="기분은 어땠나요?">
        <S.FilterWrapper>
          {data?.[3].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem
                type="button"
                isSelect={watch("tagOptions").who.includes(id)}
                onClick={handleClickFilter("who", id)}
              >
                {`${EMOJI[title]} ${title}`}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label="날씨는 어땠나요?">
        <S.FilterWrapper>
          {data?.[4].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem
                type="button"
                isSelect={watch("tagOptions").who.includes(id)}
                onClick={handleClickFilter("who", id)}
              >
                {`${EMOJI[title]} ${title}`}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
      <LabelContent css={S.margin} label="분위기는 어땠나요?">
        <S.FilterWrapper>
          {data?.[5].options.map(({ id, title }) => (
            <li key={title}>
              <S.FilterItem
                type="button"
                isSelect={watch("tagOptions").who.includes(id)}
                onClick={handleClickFilter("who", id)}
              >
                {`${EMOJI[title]} ${title}`}
              </S.FilterItem>
            </li>
          ))}
        </S.FilterWrapper>
      </LabelContent>
    </S.ContentWrapper>
  );
};

export default CreatePheedFilter;
