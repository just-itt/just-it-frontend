import { ax } from "apis";

import { makePheedFilterQuery } from "utils";
import type {
  DeleteBookmarkQueryModel,
  GetBookmarkQueryModel,
  GetBookmarksServerModel,
  PostBookmarkQueryModel,
} from "types";

export const getBookmarks = async (req: GetBookmarkQueryModel) => {
  const { data } = await ax.get<GetBookmarksServerModel>(
    `/posts/bookmarks${makePheedFilterQuery(req.query)}`,
  );

  return data;
};

export const postPheedBookmark = (req: PostBookmarkQueryModel) => {
  return ax.post(`/posts/${req.body.id}/bookmarks`);
};

export const deletePheedBookmark = (req: DeleteBookmarkQueryModel) => {
  return ax.delete(`/posts/${req.body.id}/bookmarks`);
};
