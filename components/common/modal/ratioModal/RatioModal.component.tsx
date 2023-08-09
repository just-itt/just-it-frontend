import React, { forwardRef } from "react";

import { useViewport } from "@hooks/index";
import { CheckIcon } from "@icons/index";
import * as S from "./RatioModal.styled";

interface RatioModalProps {
  ratio?: "1:1" | "3:4" | "4:3";
  handleChangeRatio?: (ratio: "1:1" | "3:4" | "4:3") => () => void;
  handleCloseModal: () => void;
}

const RatioModal = forwardRef<HTMLDialogElement, RatioModalProps>(
  ({ ratio, handleChangeRatio, handleCloseModal }, ref) => {
    const { isMobile } = useViewport();

    const handleClickRatio = (ratio: "1:1" | "3:4" | "4:3") => () => {
      if (!handleChangeRatio) return;

      handleChangeRatio(ratio)();
      handleCloseModal();
    };

    return (
      <S.RatioModal open={isMobile} ref={ref}>
        <S.Heading>사진 비율</S.Heading>
        <ul>
          <S.Ratio>
            <S.RatioBtn
              type="button"
              isSelect={ratio === "1:1"}
              onClick={handleClickRatio("1:1")}
            >
              정방형
            </S.RatioBtn>
            {ratio === "1:1" && <CheckIcon />}
          </S.Ratio>
          <S.Ratio>
            <S.RatioBtn
              type="button"
              isSelect={ratio === "3:4"}
              onClick={handleClickRatio("3:4")}
            >
              가로형 (3:4)
            </S.RatioBtn>
            {ratio === "3:4" && <CheckIcon />}
          </S.Ratio>
          <S.Ratio>
            <S.RatioBtn
              type="button"
              isSelect={ratio === "4:3"}
              onClick={handleClickRatio("4:3")}
            >
              세로형 (4:3)
            </S.RatioBtn>
            {ratio === "4:3" && <CheckIcon />}
          </S.Ratio>
        </ul>
      </S.RatioModal>
    );
  },
);

export default RatioModal;
