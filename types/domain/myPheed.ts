export interface GetMyPheedsQueryModel {
  query: {
    search_word?: string;
    tag_options?: string | string[];
  };
}
