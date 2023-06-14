import React, { useState, useRef, useEffect } from "react";

import * as S from "./DropdownBtn.styled";

interface DropdownBtnProps {
  className?: string;
  btnRender: React.ReactNode;
  dropdownItems: { label: string; value: string; handler?: () => void }[];
}

const DropdownBtn = ({
  className,
  btnRender,
  dropdownItems,
}: DropdownBtnProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  const handleClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownBtnWrapper
      className={className}
      ref={dropdownRef}
      type="button"
      onClick={handleClickDropdown}
    >
      {btnRender}
      {isOpenDropdown && (
        <S.DropdownWrapper>
          {dropdownItems.map(({ label, handler }) => (
            <S.DropdownItem key={label} onClick={handler}>
              {label}
            </S.DropdownItem>
          ))}
        </S.DropdownWrapper>
      )}
    </S.DropdownBtnWrapper>
  );
};

export default DropdownBtn;
