export interface DefaultInfoForm {
  profile: string | Blob | null;
  nickname: string;
  email: string;
}

export interface PatchNicknameQueryModel {
  body: { nickname: string };
}

export type PostProfileImageQueryModel = FormData;

export interface PatchChangePasswordQueryModel {
  body: {
    origin_password: string;
    new_password: string;
  };
}
