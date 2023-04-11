import { ax } from "apis";
import type {
  EmailAuthQueryModel,
  EmailAuthCodeQueryModel,
  CreateMemberQueryModel,
  LoginQueryModel,
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

export const login = async (req: LoginQueryModel) => {
  const res = await ax.post("/accounts/login", req.query);

  return res;
};
