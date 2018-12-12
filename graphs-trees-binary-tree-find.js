// (PLAN)

// Create a node class

// 	Have constructors on the node class for data, left and right

// Create a binary tree class

// 	Have a constructor on the binary tree for root

// 	Create an add function so that we can add the nodes in the given example, taking in data
// 		IF node is null - 
// 			the root is the new node
// 		ESLE we need to decide where to create the new done so we create a recursive search function named searchTree

// 	Create a lookup function to see if a given data value is in the tree

// 		set the current to the root
// 			If the given value is current data 
// 				return true
// 			Else
// 				if the given value is less than the current data
// 					set current to the left child node
// 				else the given value is greater than the current data
// 					set the current to the right child node
// 			if none of the above is true - then return false

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
  }
  
  const tree = new BinaryTree();
  
  tree.add(8);
  tree.add(3);
  tree.add(1);
  tree.add(6);
  tree.add(4);
  tree.add(7);
  tree.add(10);
  tree.add(14);
  tree.add(13);
  tree.doesExist(10);
  tree.doesExist(23);
