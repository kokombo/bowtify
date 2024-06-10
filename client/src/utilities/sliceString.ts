export const sliceString = (text: string, length: number) => {
  return text.length > 20 ? `${text.slice(0, length)}...` : text;
};
