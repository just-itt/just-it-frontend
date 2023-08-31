import React, { useState } from "react";
import { useRouter } from "next/router";

import { useGetTags } from "@service/common";
import { ArrowLongIcon } from "@icons/index";
import { EMOJI } from "@assets/index";
import * as S from "./Filter.styled";

const Filter = () => {
  const { push, query } = useRouter();

  const { data: tags } = useGetTags();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isSelect = (key: number) =>
    typeof query.filter === "string"
      ? query.filter === `${key}`
      : !!query.filter?.includes(`${key}`);

  const handleOpenFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleClickFilter = (key: number) => () => {
    const filterQuery = query.filter || [];

    if (isSelect(key)) {
      if (typeof filterQuery === "string") {
        const deleteQuery = { ...query };

        delete deleteQuery.filter;

        push({ query: deleteQuery });
      } else {
        push({
          query: {
            ...query,
            filter: filterQuery.filter(id => id !== `${key}`),
          },
        });
      }
    } else {
      if (typeof filterQuery === "string") {
        push({ query: { ...query, filter: [filterQuery, `${key}`] } });
      } else {
        push({ query: { ...query, filter: [...filterQuery, `${key}`] } });
      }
    }
  };

  if (!tags) return null;

  return (
    <S.Filter>
      <S.FilterWrapper isFilterOpen={isFilterOpen}>
        {tags.map(tag => (
          <S.FilterItemWrapper key={tag.id}>
            <S.FilterItem
              isSelect={isSelect(tag.id)}
              onClick={handleClickFilter(tag.id)}
            >
              {tag.title} {EMOJI[tag.title] ?? "🆕"}
            </S.FilterItem>
          </S.FilterItemWrapper>
        ))}
      </S.FilterWrapper>
      <S.OpenBtn
        aria-label={isFilterOpen ? "필터 접기" : "필터 더보기"}
        type="button"
        isFilterOpen={isFilterOpen}
        onClick={handleOpenFilter}
      >
        <ArrowLongIcon />
      </S.OpenBtn>
    </S.Filter>
  );
};

export default Filter;
