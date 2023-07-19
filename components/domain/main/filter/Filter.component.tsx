import React, { useState } from "react";
import { useRouter } from "next/router";

import { useGetTags } from "@service/common";
import { ArrowLongIcon } from "@icons/index";
import { EMOJI } from "assets/filter";
import * as S from "./Filter.styled";

const Filter = () => {
  const { replace, query } = useRouter();

  const { data: tags } = useGetTags();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isSelect = (key: number) => !!query.filter?.includes(`${key}`);

  const handleOpenFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleClickFilter = (key: number) => () => {
    const filterQuery = query.filter || [];

    if (isSelect(key)) {
      if (typeof filterQuery === "string") {
        const deleteQuery = { ...query };
        delete deleteQuery.filter;

        replace({ query: deleteQuery });
      } else {
        replace({
          query: {
            ...query,
            filter: filterQuery.filter(id => id !== `${key}`),
          },
        });
      }
    } else {
      replace({ query: { ...query, filter: [...filterQuery, `${key}`] } });
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
              {tag.title} {EMOJI[tag.title]}
            </S.FilterItem>
          </S.FilterItemWrapper>
        ))}
      </S.FilterWrapper>
      <S.OpenBtn
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
