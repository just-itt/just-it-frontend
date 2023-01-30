import React, { useState } from "react";

import * as S from "./Dropdown.styled";

interface DropdownProps {
  initValue: string | null;
  placeholder: string;
}

const Dropdown = ({ initValue, placeholder }: DropdownProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState(initValue ?? null);

  const handleClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <S.DropdownBtn type="button" onClick={handleClickDropdown}>
      <S.SelectValue>
        {selectValue ?? placeholder}
        <S.Arrow isopen={isOpenDropdown}>hihi</S.Arrow>
      </S.SelectValue>
      {isOpenDropdown && (
        <S.ListWrapper onClick={() => setSelectValue("hi")}>
          <S.List>
            <button type="button">아침</button>
          </S.List>
          <S.List>
            <button type="button">점심</button>
          </S.List>
          <S.List>
            <button type="button">저녁</button>
          </S.List>
        </S.ListWrapper>
      )}
    </S.DropdownBtn>
  );
};

export default Dropdown;
