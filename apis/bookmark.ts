import { ax } from "apis";

import type { DeleteBookmarkQueryModel, PostBookmarkQueryModel } from "types";

export const postPheedBookmark = (req: PostBookmarkQueryModel) => {
  return ax.post(`/posts/${req.body.id}/bookmarks`);
};

export const deletePheedBookmark = (req: DeleteBookmarkQueryModel) => {
  return ax.delete(`/posts/${req.body.id}/bookmarks`);
};
