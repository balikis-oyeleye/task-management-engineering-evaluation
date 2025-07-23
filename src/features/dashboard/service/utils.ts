export const today = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
