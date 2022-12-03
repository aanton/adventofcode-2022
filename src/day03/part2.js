import {readFileSync} from 'fs'
import {chunk} from '../tools/arrays.js'

const {pathname} = new URL('../../inputs/day03.txt', import.meta.url)
const raw = readFileSync(pathname).toString().split('\n')

const getGroupBadge = function ([ruckstack1, ruckstack2, ruckstack3]) {
  return ruckstack1
    .split('')
    .find(item => ruckstack2.includes(item) && ruckstack3.includes(item))
}

const getItemPriority = function (item) {
  return item.charCodeAt(0) - (item.match(/[A-Z]/) ? 38 : 96)
}

const badgesPrioritiesSum = chunk(raw, 3)
  .map(getGroupBadge)
  .map(getItemPriority)
  .reduce((acc, value) => acc + value)

console.log('Day 3 (part 2)', badgesPrioritiesSum)
