import React from "react";
import { atom } from "recoil";

export const userAtom = atom({
  key: "userState",
  default: { user: "" },
});

export const navAtom = atom({
  key: "navState",
  default: false,
});

export const modalAtom = atom<{
  isOpen: boolean;
  modalComponent: null | React.ReactNode;
}>({
  key: "modalState",
  default: { isOpen: false, modalComponent: null },
});
