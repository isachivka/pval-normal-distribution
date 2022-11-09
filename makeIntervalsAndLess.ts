const step = 0.5;
const start = 0;
const finish = 50;

export const makeIntervalsAndLess = () => {
  const intervals = [];
  let i = start;
  while (i <= 50) {
    intervals.push({ start: 0, finish: i + step, count: 0 });
    i += step;
  }
  return intervals;
};
