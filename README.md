# 🎅 Advent of Code 2022 🎄

My JS solutions to [Advent of Code 2022](https://adventofcode.com/2022/) by [@ericwastl](https://twitter.com/ericwastl).

## 💅 Project setup

- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for code linting
- vscode settings to run code formatting & linting on save
- Pre-commit hook to check code formatting & linting using [husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)

## 💻️ Installation & usage

- Clone this project
- Install dependecies
- Copy the challenges input data from their rules pages in the `input` directory
- Run the day X challenges

```bash
npm install

# Run day 1 challenges (each part is coded in its own file)
node src/day01/part1.js
node src/day01/part2.js
```

## 🕹️ Challenges

| Day | Name                | Rules                                        | Part 1                         | Part 2                         |
| --- | ------------------- | -------------------------------------------- | ------------------------------ | ------------------------------ |
| 1   | Calorie Counting    | [rules](https://adventofcode.com/2022/day/1) | [part 1](./src/day01/part1.js) | [part 2](./src/day01/part2.js) |
| 2   | Rock Paper Scissors | [rules](https://adventofcode.com/2022/day/2) | [part 1](./src/day02/part1.js) | [part 2](./src/day02/part2.js) |
