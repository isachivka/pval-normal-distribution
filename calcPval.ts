// @ts-ignore
import abTest from 'ab-test-result';

export const calcPval = ({
  branchesTotal,
  conversionsTotal,
}: {
  branchesTotal: [number, number];
  conversionsTotal: [number, number];
}) => {
  const data = {
    controlVisits: branchesTotal[0],
    controlConversions: conversionsTotal[0],
    challengerVisits: branchesTotal[1],
    challengerConversions: conversionsTotal[1],
  };
  // 5% / 2 branches
  const conf = 0.05 / 2;
  const statistic = abTest.calcResult(data, conf);
  const pValue = (1 - statistic.statistics.pValue) * 100;
  // keep all values <= 50
  // rotate all values > 50 (60 -> 40, 70 -> 30, etc...)
  return pValue <= 50 ? pValue : (pValue - 100) * -1;
};
