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
