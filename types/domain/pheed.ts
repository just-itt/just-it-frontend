import type { Comment } from "./common";

export type PostPheedQueryModel = FormData;

export interface PatchPheedQueryModel {
  id: string;
  body: FormData;
}

export interface GetPheedDetailQueryModel {
  id: string;
}

export interface GetPheedDetailServerModel {
  author: {
    created_at: string;
    email: string;
    id: number;
    last_login_at: string;
    nickname: string;
    profile_image: string;
    updated_at: string;
  };
  content: string;
  created_at: string;
  id: number;
  image: {
    image: string;
    ratio: "1:1" | "3:4" | "4:3";
  };
  is_bookmark: boolean;
  replies: Comment[];
  tag_options: { id: number; tag_title: string; title: string }[];
  title: string;
  updated_at: string;
}

export interface GetMyPheedsServerModel {
  count: number;
  items: {
    author_id: number;
    content: string;
    created_at: string;
    id: number;
    image: { image: string; ratio: string };
    tag_options: { id: number; tag_title: string; title: string }[];
    title: string;
    updated_at: string;
  }[];
}

export interface PheedForm {
  file: FileList | null;
  defaultImg?: string;
  uploadImgFile?: Blob | null;
  ratio: "1:1" | "3:4" | "4:3";
  title: string;
  content?: string;
  what: string | null;
  when: string | null;
  who: string | null;
  etc: string[];
}

export interface GetPheedsQueryModel {
  query: {
    search_word?: string;
    tag_options?: string | string[];
  };
  pageParam?: number;
}

export interface GetPheedsServerModel {
  count: number;
  items: {
    id: number;
    title: string;
    content: string;
    created_at: string;
    author_id: number;
    image: { image: string; ratio: string };
    tag_options: { id: number; title: string; tag_title: string }[];
  }[];
}

export interface DeletePheedQueryModel {
  id: string;
}

export interface PostPheedReplyQueryModel {
  id: string;
  body: {
    content: string;
  };
}

export interface DeletePheedReplyQueryModel {
  id: number;
  body: {
    post_id: number;
    reply_id: number;
  };
}

export interface PatchPheedReplyQueryModel {
  body: {
    post_id: number;
    reply_id: number;
    content: string;
  };
}

export interface GetSuggestedPheedsServerModel {
  count: number;
  items: {
    id: number;
    title: string;
    content: string;
    created_at: string;
    author_id: number;
    image: { image: string; ratio: string };
    tag_options: { id: number; title: string; tag_title: string }[];
  }[];
}
