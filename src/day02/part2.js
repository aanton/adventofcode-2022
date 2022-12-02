import {readFileSync} from 'fs'

const {pathname} = new URL('../../inputs/day02.txt', import.meta.url)
const raw = readFileSync(pathname).toString().split('\n')

const POINTS_BY_RESULT = {
  X: 0, // lose
  Y: 3, // draw
  Z: 6, // win
}

const POINTS_BY_RULES = {
  'A-X': 3, // Rival plays rock & I lose: scissors
  'A-Y': 1, // Rival plays rock & I draw: rock
  'A-Z': 2, // Rival plays rock & I win papel
  'B-X': 1, // Rival plays paper & I lose: rock
  'B-Y': 2, // Rival plays paper & I draw: paper
  'B-Z': 3, // Rival plays paper & I win: scissors
  'C-X': 2, // Rival plays scissors & I lose: paper
  'C-Y': 3, // Rival plays scissors & I draw: scissors
  'C-Z': 1, // Rival plays scissors & I win: rock
}

const getPoints = ([rivalShape, gameResult]) => {
  return (
    POINTS_BY_RULES[`${rivalShape}-${gameResult}`] +
    POINTS_BY_RESULT[gameResult]
  )
}

const games = raw.map(line => line.split(' '))
const gamesPoints = games.map(getPoints)
const totalGamesPoint = gamesPoints.reduce((acc, value) => acc + value)

console.log('Day 2 (part 1)', totalGamesPoint)
