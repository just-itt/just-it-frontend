import { useQuery } from "@tanstack/react-query";

import { getMyPheeds } from "apis";

export const useGetMyPheeds = () => {
  return useQuery({
    queryKey: ["myPheed"],
    queryFn: () => getMyPheeds(),
  });
};
