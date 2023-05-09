export interface PostPheedQueryModel {
  body: {
    image: FormData;
    title: string;
    content: string;
    ratio: string;
    tag_options: number[];
  };
}
