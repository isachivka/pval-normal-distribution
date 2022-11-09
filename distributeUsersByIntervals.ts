export const distributeUsersByIntervals = (
  intervals: { start: number; finish: number; count: number }[],
  pValues: number[]
) => {
  pValues.forEach((pValue) => {
    intervals.forEach((interval, index) => {
      if (
        pValue >= interval.start &&
        (pValue < interval.finish || pValue === 0.5)
      ) {
        intervals[index].count += 1;
      }
    });
  });

  return intervals;
};
