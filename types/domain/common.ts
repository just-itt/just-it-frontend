interface Tags {
  created_at: string;
  id: number;
  is_required: boolean;
  options: { id: number; title: string }[];
  title: string;
  updated_at: string | null;
}

export type TagsServerModel = Tags[];

export interface Comment {
  author: {
    created_at: string;
    email: string;
    id: number;
    last_login_at: string;
    nickname: string;
    profile_image: string;
    status: string; // TODO: 상태 타입 좁히기 필요
    updated_at: string;
  };
  content: string;
  created_at: string;
  id: number;
  post_id: number;
  updated_at: string;
}
