import React from "react";
import { atom } from "recoil";

export const profileAtom = atom<{
  createdAt: string;
  email: string;
  id: number;
  lastLoginAt: string;
  nickname: string;
  profileImage: string | null;
  status: string;
  updatedAt: string;
}>({
  key: "userState",
  default: {
    createdAt: "",
    email: "",
    id: 0,
    lastLoginAt: "",
    nickname: "",
    profileImage: "",
    status: "",
    updatedAt: "",
  },
});

export const navAtom = atom({
  key: "navState",
  default: false,
});

export const modalAtom = atom<null | React.ReactNode>({
  key: "modalState",
  default: null,
});
