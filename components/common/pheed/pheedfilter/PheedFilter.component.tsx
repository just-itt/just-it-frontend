import React from "react";
import type {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";

import { Division, ErrorWrapper, LabelContent } from "@components/index";
import { useGetCreatePheedTags } from "@service/index";
import { EMOJI } from "assets/filter";
import type { PheedForm } from "types";
import * as S from "./PheedFilter.styled";

interface PheedFilterProps {
  register: UseFormRegister<PheedForm>;
  watch: UseFormWatch<PheedForm>;
  errors: FieldErrors<PheedForm>;
}

const PheedFilter = ({ register, watch, errors }: PheedFilterProps) => {
  const { data } = useGetCreatePheedTags();

  if (!data) return null;

  return (
    <S.ContentWrapper>
      <S.Section>
        <S.Title>게시글 정보</S.Title>
        <LabelContent css={S.labelcontent} label="음식 이름 (필수)">
          <ErrorWrapper
            isError={!!errors?.title}
            errorMessage="음식 이름을 입력해주세요."
          >
            <LabelContent.Input
              css={S.input}
              placeholder="음식 이름 입력..."
              isError={!!errors?.title}
              register={register("title", { required: true })}
            />
          </ErrorWrapper>
        </LabelContent>
        <LabelContent css={S.labelcontent} label="간단한 설명 (필수)">
          <ErrorWrapper
            isError={!!errors?.content}
            errorMessage="간단한 설명을 입력해주세요."
          >
            <LabelContent.Textarea
              css={S.textArea}
              placeholder="공유할 음식에 대해 자유롭게 설명해 주세요"
              isError={!!errors?.content}
              register={register("content", { required: true })}
            />
          </ErrorWrapper>
        </LabelContent>
      </S.Section>
      <S.Section>
        <S.Title>태그 설정</S.Title>
        <LabelContent css={S.labelcontent} label="무엇을 먹었나요? (필수)">
          <ErrorWrapper
            isError={!!errors?.what}
            errorMessage="태그를 선택해 주세요."
          >
            <S.FilterWrapper>
              {data[0].options.map(({ id, title }) => {
                return (
                  <S.FilterItem
                    key={title}
                    isSelect={watch("what") === `${id}`}
                  >
                    <label htmlFor={`what${id}`}>{`${
                      EMOJI[title] ?? "🆕"
                    } ${title}`}</label>
                    <input
                      id={`what${id}`}
                      type="radio"
                      value={id}
                      {...register("what", { required: true })}
                    />
                  </S.FilterItem>
                );
              })}
            </S.FilterWrapper>
          </ErrorWrapper>
        </LabelContent>
        <Division css={S.division} />
        <LabelContent css={S.labelcontent} label="언제 먹었나요? (필수)">
          <ErrorWrapper
            isError={!!errors?.when}
            errorMessage="태그를 선택해 주세요."
          >
            <S.FilterWrapper>
              {data[1].options.map(({ id, title }) => (
                <S.FilterItem key={title} isSelect={watch("when") === `${id}`}>
                  <label htmlFor={`when${id}`}>{`${
                    EMOJI[title] ?? "🆕"
                  } ${title}`}</label>
                  <input
                    id={`when${id}`}
                    type="radio"
                    value={id}
                    {...register("when", { required: true })}
                  />
                </S.FilterItem>
              ))}
            </S.FilterWrapper>
          </ErrorWrapper>
        </LabelContent>
        <Division css={S.division} />
        <LabelContent css={S.labelcontent} label="누구랑 먹었나요? (필수)">
          <ErrorWrapper
            isError={!!errors?.who}
            errorMessage="태그를 선택해 주세요."
          >
            <S.FilterWrapper>
              {data[2].options.map(({ id, title }) => (
                <S.FilterItem key={title} isSelect={watch("who") === `${id}`}>
                  <label htmlFor={`who${id}`}>{`${
                    EMOJI[title] ?? "🆕"
                  } ${title}`}</label>
                  <input
                    id={`who${id}`}
                    type="radio"
                    value={id}
                    {...register("who", { required: true })}
                  />
                </S.FilterItem>
              ))}
            </S.FilterWrapper>
          </ErrorWrapper>
        </LabelContent>
        <Division css={S.division} />
        <LabelContent css={S.labelcontent} label="기분은 어땠나요?">
          <S.FilterWrapper>
            {data[3].options.map(({ id, title }) => (
              <S.FilterItem
                key={title}
                isSelect={watch("etc").includes(`${id}`)}
              >
                <label htmlFor={`checkbox${id}`}>{`${
                  EMOJI[title] ?? "🆕"
                } ${title}`}</label>
                <input
                  id={`checkbox${id}`}
                  type="checkbox"
                  value={id}
                  {...register("etc")}
                />
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <Division css={S.division} />
        <LabelContent css={S.labelcontent} label="날씨는 어땠나요?">
          <S.FilterWrapper>
            {data[4].options.map(({ id, title }) => (
              <S.FilterItem
                key={title}
                isSelect={watch("etc").includes(`${id}`)}
              >
                <label htmlFor={`checkbox${id}`}>{`${
                  EMOJI[title] ?? "🆕"
                } ${title}`}</label>
                <input
                  id={`checkbox${id}`}
                  type="checkbox"
                  value={id}
                  {...register("etc")}
                />
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
        <Division css={S.division} />
        <LabelContent css={S.labelcontent} label="분위기는 어땠나요?">
          <S.FilterWrapper>
            {data[5].options.map(({ id, title }) => (
              <S.FilterItem
                key={title}
                isSelect={watch("etc").includes(`${id}`)}
              >
                <label htmlFor={`checkbox${id}`}>{`${
                  EMOJI[title] ?? "🆕"
                } ${title}`}</label>
                <input
                  id={`checkbox${id}`}
                  type="checkbox"
                  value={id}
                  {...register("etc")}
                />
              </S.FilterItem>
            ))}
          </S.FilterWrapper>
        </LabelContent>
      </S.Section>
    </S.ContentWrapper>
  );
};

export default PheedFilter;
