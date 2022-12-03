export const chunk = function (array, size) {
  return array.reduce((groups, rucksack, index) => {
    const groupIndex = Math.floor(index / size)

    if (!groups[groupIndex]) groups[groupIndex] = []
    groups[groupIndex].push(rucksack)

    return groups
  }, [])
}
