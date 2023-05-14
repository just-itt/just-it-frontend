export type PostPheedQueryModel = FormData;

export interface GetPheedDetailQueryModel {
  id: string;
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
