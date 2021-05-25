// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
function getHeight(root) {
  if (!root) return - 1
  
  let right = getHeight(root.right)
  let left = getHeight(root.left)

  if (left > right) {
    return left + 1
  }else return right + 1
}



module.exports = {
  getHeight
};
