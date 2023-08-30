import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { CloseIcon, KakaoIcon } from "@icons/index";
import Spinner from "../spinner/Spinner.component";
import * as S from "./Mail.styled";

const Mail = () => {
  const [isClick, setIsClick] = useState(false);
  const [isSendEmailLoading, setIsSendEmailLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleClick = () => setIsClick(!isClick);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendEmailLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string,
      )
      .then(
        () => {
          toast.success("문의가 등록되었습니다 :)");
          setIsSendEmailLoading(false);
          handleClick();
        },
        () => {
          toast.error("잠시후 다시 시도해주세요 :(");
          setIsSendEmailLoading(false);
        },
      );
  };

  return (
    <S.Mail>
      {isClick && (
        <S.Content>
          <S.Heading>문의하기</S.Heading>
          <form onSubmit={handleSubmit}>
            <S.Textarea
              name="content"
              placeholder="에러 발생, 문의 사항, 기능 추가 등등 많은 의견 보내주시면 감사하겠습니다!"
              onChange={handleContent}
            />
            <S.SubmitBtn
              disabled={content.trim().length === 0 || isSendEmailLoading}
            >
              {isSendEmailLoading ? <Spinner /> : "등록"}
            </S.SubmitBtn>
          </form>
        </S.Content>
      )}
      <S.IconBtn
        aria-label={
          isClick ? "1대1 문의하기 모달 닫기" : "1대1 문의하기 모달 열기"
        }
        type="button"
        isClick={isClick}
        onClick={handleClick}
      >
        {isClick ? <CloseIcon /> : <KakaoIcon />}
      </S.IconBtn>
    </S.Mail>
  );
};

export default Mail;
