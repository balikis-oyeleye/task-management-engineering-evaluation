export const today = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};
