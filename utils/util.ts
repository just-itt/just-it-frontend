import type { GetPheedsQueryModel } from "types";

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = array.map(a => [Math.random(), a] as [number, T]);
  shuffled.sort((a, b) => a[0] - b[0]);
  return shuffled.map(a => a[1]);
};

export const makeImagePreview = (imageFile: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const previewUrl = reader.result as string;
      resolve(previewUrl);
    };
    reader.onerror = reject;
    reader.readAsDataURL(imageFile);
  });
};

export const handleResize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export const makePheedFilterQuery = ({
  search_word,
  tag_options,
}: GetPheedsQueryModel["query"]) => {
  if (!search_word && !tag_options) return "";

  let query = "?";

  if (search_word) {
    query += search_word;
  }

  if (tag_options) {
    if (typeof tag_options === "string") {
      query += `tag_options=${tag_options}`;
    } else {
      query += tag_options
        .map((option, i) =>
          tag_options.length === i + 1
            ? `tag_options=${option}`
            : `tag_options=${option}&`,
        )
        .join("");
    }
  }

  return query;
};
