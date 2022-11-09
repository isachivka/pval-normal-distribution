import { range, random } from 'lodash';
import { CONVERSION, USERS_COUNT } from './consts';

export const generateUsers = () =>
  range(USERS_COUNT).map(() => random(1, 100) <= CONVERSION);
