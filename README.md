### Research of p-value distribution in A/A tests

This code:

- Generate 1ml user with 3% conversions
- Split this users in 2 experiment branches (like a/a test)
- Do it 100000 times, like 100k experiments
- Calc p-value for each experiment
- Then create array of intervals 0 - 0.5, 0.5-1, ..., 99.5 - 100 and calc how many experiments hit in each interval
- Then print stats
