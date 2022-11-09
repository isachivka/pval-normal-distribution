### Research of p-value distribution in A/A tests

This code:

- Generate {USERS_COUNT} user with {CONVERSION}% conversions
- Split this users in 2 experiment branches (like a/a test)
- Do it {EXPERIMENTS_COUNT} times, like {EXPERIMENTS_COUNT} experiments
- Calc p-value for each experiment
- Then create array of intervals 0 - 0.5, 0.5-1, ..., 99.5 - 100 and calc how many experiments hit in each interval
- Then print stats

Every variable you can set in consts.ts file.
