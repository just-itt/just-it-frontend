export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = array.map(a => [Math.random(), a] as [number, T]);
  shuffled.sort((a, b) => a[0] - b[0]);
  return shuffled.map(a => a[1]);
};
