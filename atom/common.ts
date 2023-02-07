import { atom } from "recoil";

export const isLoginState = atom({
  key: "userState",
  default: false,
});
