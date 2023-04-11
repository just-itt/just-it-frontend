import { useMutation } from "@tanstack/react-query";

import { createMember, emailAuth, emailAuthCode, login } from "apis";
import type {
  CreateMemberQueryModel,
  EmailAuthCodeQueryModel,
  EmailAuthQueryModel,
  LoginQueryModel,
} from "types";

export const useEmailAuth = () => {
  return useMutation({
    mutationFn: (req: EmailAuthQueryModel) => emailAuth(req),
  });
};

export const useEmailAuthCode = () => {
  return useMutation({
    mutationFn: (req: EmailAuthCodeQueryModel) => emailAuthCode(req),
  });
};

export const useCreateMember = () => {
  return useMutation({
    mutationFn: (req: CreateMemberQueryModel) => createMember(req),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: LoginQueryModel) => login(req),
  });
};
