export const time = (timestamp: number) => {
  const intl = Intl.DateTimeFormat("en-EN", { dateStyle: "long" });
  return intl.format(new Date(timestamp));
};
