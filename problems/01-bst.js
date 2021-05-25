class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    // Initialize an empty binary search tree
    
    constructor() {
        this.root = null
        
    }

    // Insert a node into the binary search tree
    insert(val, currentNode = this.root,) {
        if (!this.root) {
            this.root = new TreeNode(val)
            return true
        }


        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val)
                
            } else {
                this.insert(val, currentNode.left,)
            }
        }else {
             if (!currentNode.right) {
                currentNode.right = new TreeNode(val)
                
            } else {
                this.insert(val, currentNode.right,)
            }
        }
        
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode = this.root) {
        if (!currentNode) return false

        if (val === currentNode.val) return true
        let searchResult1 = false
        let searchResult2 = false
        if (val < currentNode.val) {
            searchResult1 = this.searchRecur(val, currentNode.left)
            
        } else if (val > currentNode.val) {
            
            searchResult2 = this.searchRecur(val, currentNode.right)
        }
        return (searchResult1 || searchResult2 || false)
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        if (!this.root) return false

        let traversingRoot = this.root
       
        while (traversingRoot) {
            if (val === traversingRoot.val) return true
            if (val < traversingRoot.val) {
             
            traversingRoot = traversingRoot.left
            } else {
            traversingRoot = traversingRoot.right
            }
        }
        
        return false
    }

    //searchIter(val) {
    //    if (!this.root) return false
//
    //    let traversingRoot = this.root
    //   
    //    while (traversingRoot) {
    //        
    //        if (val < traversingRoot.val) {
    //         
    //        traversingRoot = traversingRoot.left
    //        } else if(val > traversingRoot.val){
    //        traversingRoot = traversingRoot.right
    //        } else {
    //            return true
    //        }
    //    }
    //   
    //    return false
    //}
}

module.exports = {
    TreeNode,
    BST
};
