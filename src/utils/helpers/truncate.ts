const truncate = (str: string): string => {
  return str.length > 15 ? str.substring(0, 10) + "..." : str;
};

export { truncate as default };
