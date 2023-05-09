import { ax } from "apis";

import type { PostPheedQueryModel } from "types";

export const postPheed = async (req: PostPheedQueryModel) => {
  const res = await ax.post("/posts", {
    file: req.body.image,
    // payload: {
    //   image: req.body.image,
    title: req.body.title,
    content: req.body.content,
    ratio: req.body.ratio,
    tag_options: req.body.tag_options,
    // },
  });

  return res;
};
