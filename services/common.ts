import { useQuery } from "@tanstack/react-query";

import { getGetTags } from "apis";

const commonKeys = {
  all: ["common"],
  tags: ["tags"],
};

export const useGetTags = () => {
  return useQuery({ queryKey: commonKeys.tags, queryFn: () => getGetTags() });
};
