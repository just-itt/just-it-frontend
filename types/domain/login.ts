export interface EmailAuthQueryModel {
  query: { email: string };
}

export interface EmailAuthCodeQueryModel {
  query: { email: string; auth_code: string };
}

export interface CreateMemberQueryModel {
  query: { email: string; password: string };
}

export interface LoginQueryModel {
  query: { email: string; password: string };
}

export interface LoginServerModel {
  expires: string;
  token: string;
}

export interface MemberProfileServerModel {
  created_at: string;
  email: string;
  id: number;
  last_login_at: string;
  nickname: string;
  profile_image: string | null;
  status: string;
  updated_at: string;
}
