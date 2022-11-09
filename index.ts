import { generateUsers } from './generateUsers';
import { getExpStats } from './getExpStats';
import { calcPval } from './calcPval';
import { range } from 'lodash';
import { EXPERIMENTS_COUNT } from './consts';
import { makeIntervals } from './makeIntervals';
import { makeIntervalsAndLess } from './makeIntervalsAndLess';
import { distributeUsersByIntervals } from './distributeUsersByIntervals';
import { prettyPrintResults } from './prettyPrintResults';

const pValues = range(EXPERIMENTS_COUNT).map(() => {
  const users = generateUsers();
  const expsStats = getExpStats(users);
  return calcPval(expsStats);
});

const intervalsExact = makeIntervals();
const intervalsAndLess = makeIntervalsAndLess();

const exact = distributeUsersByIntervals(intervalsExact, pValues);
const andLess = distributeUsersByIntervals(intervalsAndLess, pValues);

prettyPrintResults('exact', exact);
prettyPrintResults('andLess', andLess);
