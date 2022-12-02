import {readFileSync} from 'fs'

const {pathname} = new URL('../../inputs/day01.txt', import.meta.url)
const raw = readFileSync(pathname).toString()

const caloriesListByElf = raw
  .split('\n\n')
  .map(foodsCalories =>
    foodsCalories.split('\n').map(foodCalories => Number(foodCalories))
  )

const caloriesByElf = caloriesListByElf.map(caloriesList =>
  caloriesList.reduce((sum, value) => sum + value)
)

caloriesByElf.sort((a, b) => a - b)

const caloriesThreeTopElves = caloriesByElf
  .slice(-3)
  .reduce((sum, value) => sum + value)

console.log('Day 1 (part 2)', caloriesThreeTopElves)
