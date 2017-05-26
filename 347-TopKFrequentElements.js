// Given a non-empty array of integers, return the k most frequent elements.

// For example:
// Given [1,1,1,2,2,3] and k = 2, return [1,2]

class MinHeap {
  constructor (size) {
    this.storage = [null]
    this.capacity = size
  }

  swap (a, b) {
    [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]]
  }

  bubbleUp () {
    let n = this.storage.length - 1

    while (this.storage[n] < this.storage[Math.floor(n / 2)] && n > 0) {
      this.swap(n - 1, Math.floor(n / 2))
      n = Math.floor(n / 2)
    }
  }

  sinkDown (index = 1) {
    // Find which child is smallest and swap
    let heap = this.storage
    let leftIndex = 2 * index
    let rightIndex = 2 * index + 1
    let childIndex = heap[leftIndex] < heap[rightIndex] ? leftIndex : rightIndex

    if (heap[index] > heap[childIndex]) {
      this.swap(index, childIndex)
      this.sinkDown(childIndex)
    }
  }

  insert (item) {
    // Take item an add to end of storage
    this.storage.push(item)
    this.bubbleUp()
    if (this.storage.length > this.capacity) {
      this.removeMinimum()
    }
  }

  removeMinimum () {
    // Swap last element with first element
    let n = this.storage.length
    this.swap(n - 1, 1)
    this.storage.pop()
    this.sinkDown()
  }
}

const createFrequencyHash = (arr) => {
  return arr.reduce((hash, item) => {
    if (hash[item]) {
      hash[item]++
    } else {
      hash[item] = 1
    }

    return hash
  }, {})
}

const topKFrequent = (nums, k) => {
  // Create hash of nums and frequency of each
  let hash = createFrequencyHash(nums)
  let heap = new MinHeap(k)

  // Iterate over hash of key value and add to min heap of max size k
  for (let num in hash) {

  }
  // If size of heap = k and item > count of head of min heap then remove head
  // Add to end and rebalance
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1,2]
