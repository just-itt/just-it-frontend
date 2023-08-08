import { ax } from "apis";

import type {
  DeleteBookmarkQueryModel,
  GetBookmarksServerModel,
  PostBookmarkQueryModel,
} from "types";

export const getBookmarks = async () => {
  const { data } = await ax.get<GetBookmarksServerModel>("/posts/bookmarks");

  return data;
};

export const postPheedBookmark = (req: PostBookmarkQueryModel) => {
  return ax.post(`/posts/${req.body.id}/bookmarks`);
};

export const deletePheedBookmark = (req: DeleteBookmarkQueryModel) => {
  return ax.delete(`/posts/${req.body.id}/bookmarks`);
};
