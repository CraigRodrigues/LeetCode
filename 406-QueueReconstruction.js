/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
  if (people.length === 0) return []

  let results = []
  // Stable sort people array
  people.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1])

  // Iterate over array
  for (let i = 0; i < people.length; i++) {
    // If k index exists in array
    let k = people[i][1]
    if (results[k] !== undefined) {
      // Remove from array and place into that index
      results.splice(k, 0, people[i])
    } else {
      // Push to end of array
      results.push(people[i])
    }
  }

  return results
}

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])) // [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
