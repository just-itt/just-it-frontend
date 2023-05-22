export interface PostBookmarkQueryModel {
  body: { id: string };
}

export interface DeleteBookmarkQueryModel {
  body: { id: string };
}

export interface GetBookmarksServerModel {
  count: number;
  items: {
    author_id: number;
    content: string;
    created_at: string;
    id: number;
    image: { image: string; ratio: string };
    tag_options: {
      id: number;
      tag_title: string;
      title: string;
    }[];
    title: string;
    updated_at: string;
  }[];
}
