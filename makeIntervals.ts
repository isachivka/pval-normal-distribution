const step = 0.5;
const start = 0;
const finish = 50;

export const makeIntervals = () => {
  const intervals = [];
  let i = start;
  while (i <= 50) {
    intervals.push({ start: i, finish: i + step, count: 0 });
    i += step;
  }
  return intervals;
};
