import * as express from "express";
import * as cors from "cors";
import axios from "axios";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
import { config } from "dotenv";
import { KakaoUser } from "./types";
import { UserRecord } from "firebase-admin/lib/auth/user-record";

require("firebase-functions/logger/compat");

config();

const app = express();
app.use(cors({ origin: true }));

interface TokenResponse {
  token_type: string;
  access_token: string;
  id_token?: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope?: string;
}

const getToken = async (code: string): Promise<TokenResponse> => {
  const body = {
    grant_type: "authorization_code",
    client_id: process.env.KAKAO_REST_API_KEY || "",
    redirect_uri: process.env.KAKAO_REDIRECT_URI || "",
    code,
  };

  const res = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    new URLSearchParams(body),
  );
  return res.data;
};

const getKakaoUser = async (token: string): Promise<KakaoUser> => {
  const res = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const getAdminApp = () => {
  const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY || "");

  return !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
      })
    : admin.app();
};

const updateOrCreateUser = async (user: KakaoUser): Promise<UserRecord> => {
  const auth = admin.auth(getAdminApp());

  const kakaoAccount = user.kakao_account;
  const properties = {
    uid: `kakao:${user.id}`,
    provider: "KAKAO",
    displayName: kakaoAccount?.profile?.nickname,
    email: kakaoAccount?.email,
  };

  try {
    return await auth.updateUser(properties.uid, properties);
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return await auth.createUser(properties);
    }
    throw error;
  }
};

app.post("/kakao", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({
      code: 400,
      message: "code is a required parameter.",
    });
  }

  const { access_token } = await getToken(code);

  const kakaoUser = await getKakaoUser(access_token);

  const authUser = await updateOrCreateUser(kakaoUser);

  const firebaseToken = await admin
    .auth()
    .createCustomToken(authUser.uid, { provider: "KAKAO" });

  return res.status(200).json({ firebaseToken });
});

exports.auth = functions
  .runWith({ secrets: ["SERVICE_ACCOUNT_KEY"] })
  .region("asia-northeast3")
  .https.onRequest(app);
