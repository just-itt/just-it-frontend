import ax from "./axios";

export const getGetTags = async () => {
  const { data } = await ax.get("/tags");

  return data;
};
