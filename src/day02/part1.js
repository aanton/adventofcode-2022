import {readFileSync} from 'fs'

const {pathname} = new URL('../../inputs/day02.txt', import.meta.url)
const raw = readFileSync(pathname).toString().split('\n')

const POINTS_BY_SHAPE = {
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
}

const POINTS_BY_RULES = {
  'A-X': 3, // rock-rock: draw
  'A-Y': 6, // rock-paper: win
  'A-Z': 0, // rock-scissors: lose
  'B-X': 0, // paper-rock: lose
  'B-Y': 3, // paper-paper: draw
  'B-Z': 6, // paper-scissors: win
  'C-X': 6, // scissors-rock: win
  'C-Y': 0, // scissors-paper: lose
  'C-Z': 3, // scissors-scissors: draw
}

const getPoints = ([rivalShape, myShape]) => {
  return POINTS_BY_RULES[`${rivalShape}-${myShape}`] + POINTS_BY_SHAPE[myShape]
}

const games = raw.map(line => line.split(' '))
const gamesPoints = games.map(getPoints)
const totalGamesPoint = gamesPoints.reduce((acc, value) => acc + value)

console.log('Day 2 (part 1)', totalGamesPoint)
