import { ax } from "apis";
import type { AxiosResponse } from "axios";
import type {
  EmailAuthQueryModel,
  EmailAuthCodeQueryModel,
  CreateMemberQueryModel,
  LoginQueryModel,
  LoginServerModel,
  MemberProfileServerModel,
  PostFindPasswordEmailSendQueryModel,
  PostFindPasswordEmailCheckQueryModel,
  PatchResetPasswordQueryModel,
} from "types";

export const emailAuth = async (req: EmailAuthQueryModel) => {
  const res = await ax.post("/accounts/email-auth/send", req.query);

  return res;
};

export const emailAuthCode = async (req: EmailAuthCodeQueryModel) => {
  const res = await ax.post("/accounts/email-auth/check", req.query);

  return res;
};

export const createMember = async (req: CreateMemberQueryModel) => {
  const res = await ax.post("/accounts/join", req.query);

  return res;
};

export const login = async (
  req: LoginQueryModel,
): Promise<AxiosResponse<LoginServerModel>> => {
  const res = await ax.post("/accounts/login", req.query);

  return res;
};

export const getMyProfile = async () => {
  const { data } = await ax.get<MemberProfileServerModel>("/members/me");

  return data;
};

export const postFindPasswordEmailSend = async (
  req: PostFindPasswordEmailSendQueryModel,
) => {
  const res = await ax.post("/accounts/find-pw/send", req.body);

  return res;
};

export const postFindPasswordEmailCheck = async (
  req: PostFindPasswordEmailCheckQueryModel,
) => {
  const res = await ax.post("/accounts/find-pw/check", req.body);

  return res;
};

export const patchResetPassword = async (req: PatchResetPasswordQueryModel) => {
  const res = await ax.patch("/accounts/reset-pw", req.body);

  return res;
};
