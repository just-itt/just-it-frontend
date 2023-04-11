export interface EmailAuthQueryModel {
  query: { email: string };
}

export interface EmailAuthCodeQueryModel {
  query: { email: string; auth_code: string };
}

export interface CreateMemberQueryModel {
  query: { email: string; password: string; nickname: string };
}

export interface LoginQueryModel {
  query: { email: string; password: string };
}
