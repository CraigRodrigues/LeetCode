/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// My solution
const findBottomLeftValue = (root) => {
  let queue = []
  let newQueue = []
  let left = null

  queue.push(root)
  left = queue[0]

  while (queue.length > 0) {
    let node = queue.shift()

    if (node.left) newQueue.push(node.left)
    if (node.right) newQueue.push(node.right)
    if (queue.length === 0 && newQueue.length > 0) {
      queue = newQueue
      newQueue = []
      left = queue[0]
    }
  }

  return left.val
}

// Ideal solution is a right to left BFS
const findBottomLeftValueOptimal = (root) => {
  let q = [root]
  while (q.length > 0) {
    root = q.shift()
    if (root.right) q.push(root.right)
    if (root.left) q.push(root.left)
  }

  return root.val
}
