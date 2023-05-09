import { useMutation } from "@tanstack/react-query";

import { postPheed } from "apis";
import type { PostPheedQueryModel } from "types";

export const usePostPheed = () => {
  return useMutation({
    mutationFn: (req: PostPheedQueryModel) => postPheed(req),
  });
};
