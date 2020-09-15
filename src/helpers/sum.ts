export const sum = (accounts: any[], key: string) => {
  return accounts.reduce((prev: number, cur: number) => {
    return prev + cur[key];
  }, 0);
};
