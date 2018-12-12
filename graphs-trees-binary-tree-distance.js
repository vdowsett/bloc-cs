// (PLAN)

// Source: https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/
// Source: https://github.com/hanzichi/leetcode/tree/master/Algorithms/Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree
// Video: https://www.youtube.com/watch?v=F-_1sbnPbWQ

// Given the above informaiton I researched, my plan is as follows:

// Repeat setting up node and binary tree classes from previous question

// create a lowest-common-ancestor function ( root, n1, n2 )

    // if root is null  - return null
    // if root is n1 or root is n2  - return root
    // left = lowest-common-ancestor function ( root.left, n1, n2 )
    // right = lowest-common-ancestor function ( root.right, n1, n2 )

    // IF left is not null and right is not null
    //   return root,
    // else
    //   return (left ?  left : right );

// 	Create a distance calculation function that takes in the 2 nodes, n1 and n2

  // initiate the lowestCommonAncestor function, passing in the root, n1 and n2, and setting it to a variable called lca.

//  Dist(n1, n2) = Dist(root, n1) + Dist(root, n2) - 2*Dist(root, lca) 


/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
    
    doesExist(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
            console.log(data + " does exist in tree")
            return true;
        }
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      console.log(data + " not found")
      return false;
    }

    findLCA(n1, n2) { //lowest common ancestor
      let current = this.root;
      while (current) {

        if (n1 > current && n2 > current) {
          current = current.right;
        } else if (n1 < current && n2 < current) {
          current = current.left;
        } else {
          console.log(current.data + " as LCA ");
          return current;
        }
      }
    }

    findDistanceFromLCA(lca, data) {
      let distance = 0;
        while (data !== lca.data) {
          if (data === lca.data) {
            return distance;
        } else if (data < lca.data) {
            distance += 1;
            lca = lca.left;
        } else {
          distance += 1;
          lca = lca.right;
        }
      }
      console.log(distance)
      return distance;
    }

    findDistanceOfTwoNodes(n1, n2) {

      let lca = this.findLCA(n1, n2);
      let distanceOne = this.findDistanceFromLCA(lca, n1);
      let distanceTwo = this.findDistanceFromLCA(lca, n2);
      let distanceTotal = distanceOne + distanceTwo;

      console.log("distanceTotal: " + distanceTotal);
      return distanceTotal;

    }

  }
  
  const tree = new BinaryTree();
  
  tree.add(3);
  tree.add(1);
  tree.add(6);
  tree.add(4);
  tree.add(7);
  tree.add(10);
  tree.add(14);
  tree.add(13);
  // tree.doesExist(10);
  // tree.doesExist(23);
  // tree.findLCA(10, 4);
  tree.findDistanceOfTwoNodes(1, 13);