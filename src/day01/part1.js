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

const maxCalories = Math.max(...caloriesByElf)

console.log('Day 1 (part 1)', maxCalories)
