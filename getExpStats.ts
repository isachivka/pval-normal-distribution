import { random, range } from 'lodash';

export const getExpStats = (users: boolean[]) => {
  const branchesTotal = range(2).map(() => 0) as [number, number];
  const conversionsTotal = range(2).map(() => 0) as [number, number];

  users.forEach((isConversion) => {
    const rand = random(0, 1);
    branchesTotal[rand] += 1;
    if (isConversion) {
      conversionsTotal[rand] += 1;
    }
  });

  return {
    branchesTotal,
    conversionsTotal,
  };
};
