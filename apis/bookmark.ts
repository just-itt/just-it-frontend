import { ax } from "apis";

import type {
  DeletePheedBookmarkQueryModel,
  PostPheedBookmarkQueryModel,
} from "types";

export const postPheedBookmark = (req: PostPheedBookmarkQueryModel) => {
  return ax.post(`/posts/${req.body.id}/bookmarks`);
};

export const deletePheedBookmark = (req: DeletePheedBookmarkQueryModel) => {
  return ax.delete(`/posts/${req.body.id}/bookmarks`);
};
