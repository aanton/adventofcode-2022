import {readFileSync} from 'fs'

const {pathname} = new URL('../../inputs/day03.txt', import.meta.url)
const raw = readFileSync(pathname).toString().split('\n')

const getDuplicatedItem = function (items) {
  const compartment1 = items.slice(0, items.length / 2)
  const compartment2 = items.slice(items.length / 2)

  return compartment1.split('').find(item => compartment2.includes(item))
}

const getItemPriority = function (item) {
  return item.charCodeAt(0) - (item.match(/[A-Z]/) ? 38 : 96)
}

const prioritiesSum = raw
  .map(getDuplicatedItem)
  .map(getItemPriority)
  .reduce((acc, value) => acc + value)

console.log('Day 3 (part 1)', prioritiesSum)
