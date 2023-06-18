import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ArrowLongIcon } from "@icons/index";
import {
  DAY_OF_THE_WEEKS,
  FOOD_CATEGORIES,
  TIME_ZONES,
  WHO_WITHS,
} from "assets/filter";
import * as S from "./Filter.styled";

const Filter = () => {
  const { replace, query } = useRouter();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{ key: string; label: string }[]>([]);

  const isSelect = (key: string) => !!query.filter?.includes(key);

  const handleClickFilter = (key: string) => () => {
    replace(
      isSelect(key) ? { query: {} } : { query: { ...query, filter: key } },
    );
  };

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    setFilters(
      [
        ...FOOD_CATEGORIES,
        ...DAY_OF_THE_WEEKS,
        ...TIME_ZONES,
        ...WHO_WITHS,
      ].sort(() => Math.random() - 0.5),
    );
  }, []);

  return (
    <S.Filter>
      <S.FilterWrapper isFilterOpen={isFilterOpen}>
        {filters.map(item => (
          <S.FilterItem
            key={item.key}
            isSelect={isSelect(item.key)}
            onClick={handleClickFilter(item.key)}
          >
            {item.label}
          </S.FilterItem>
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
