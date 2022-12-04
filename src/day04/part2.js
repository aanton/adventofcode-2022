import {readFileSync} from 'fs'

const {pathname} = new URL('../../inputs/day04.txt', import.meta.url)
const raw = readFileSync(pathname).toString().split('\n')

const pairs = raw.map(line =>
  line
    .split(',')
    .map(sections => sections.split('-').map(section => Number(section)))
)

const overlapPairs = pairs.filter(
  ([section1, section2]) =>
    (section1[0] <= section2[0] && section1[1] >= section2[0]) ||
    (section2[0] <= section1[0] && section2[1] >= section1[0])
)

console.log('Day 4 (part 1)', overlapPairs.length)
