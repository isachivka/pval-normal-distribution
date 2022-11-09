import { EXPERIMENTS_COUNT } from './consts';

export const prettyPrintResults = (
  name: string,
  intervals: { start: number; finish: number; count: number }[]
) => {
  console.log(`${name}`);
  intervals.forEach((interval) => {
    console.log(
      `${interval.start} - ${interval.finish}, count: ${interval.count}, % - ${
        (interval.count / EXPERIMENTS_COUNT) * 100
      }%`
    );
  });
  console.log('-=-=-=-');
};
