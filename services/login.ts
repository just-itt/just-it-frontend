import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import {
  createMember,
  emailAuth,
  emailAuthCode,
  getMyProfile,
  login,
  patchResetPassword,
  postFindPasswordEmailCheck,
  postFindPasswordEmailSend,
} from "apis";
import type {
  CreateMemberQueryModel,
  EmailAuthCodeQueryModel,
  EmailAuthQueryModel,
  LoginQueryModel,
  PatchResetPasswordQueryModel,
  PostFindPasswordEmailCheckQueryModel,
  PostFindPasswordEmailSendQueryModel,
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

export const useGetMyProfile = () => {
  return useQuery({
    queryKey: ["myProfile"],
    queryFn: () => getMyProfile(),
    enabled: !!Cookies.get("auth"),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export const usePostFindPasswordEmailSend = (
  req: PostFindPasswordEmailSendQueryModel,
) => {
  return useMutation({
    mutationFn: () => postFindPasswordEmailSend(req),
  });
};

export const usePostFindPasswordEmailCheck = (
  req: PostFindPasswordEmailCheckQueryModel,
) => {
  return useMutation({
    mutationFn: () => postFindPasswordEmailCheck(req),
  });
};

export const usePatchResetPassword = (req: PatchResetPasswordQueryModel) => {
  return useMutation({
    mutationFn: () => patchResetPassword(req),
  });
};
