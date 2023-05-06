class Tree {
    constructor() {
      this.root = null;
      this.leftAddFlag = false;
      this.rightAddFlag = false;
    }
  
// we can use the find() inside add() with return flag to decide whether we will create a new node
// in left side or right side

    add(value) {
      // if it's the first number to be added, make it the root node
      if (this.root === null) {
        this.root = new Node(value);
      } else {
        let current = this.root;
        // start from the root and loop to find the correct place for the new element
        while (true) {
          if (current.value > value) {
            // go to left
            // if left of current has value, make this left be the current and redo the loop
            // don't make the left of current be the value until the place isn't occupied by any other element
            if (current.left) {
              current = current.left;
            } else {
              current.left = new Node(value);
              break;
            }
          } else {
            // if value > current.value, go to right
            // if value = current.value, you can go to right or go to left, I choose here going to right
            // if right of current has value, make this left be the current and redo the loop
            // don't make the right of current be the value until the place isn't occupied by any other element
            if (current.right) {
              current = current.right;
            } else {
              current.right = new Node(value);
              break;
            }
          }
        }
      }
      // return the binary search tree
      return this;
    }
  
    toObject() {
      return this.root;
    }
  
    find(value) {
        let current = this.root;
        while (true) {
          if (current.value > value) {
            // go to left
            if (current.left) {
              current = current.left;
            } else {
              console.log("There is no such element!");
              return this.leftAddFlag = true;
            }
          } else if (current.value < value) {
            // go to right
            if (current.right) {
              current = current.right;
            } else {
              console.log("There is no such element!");
              return this.rightAddFlag = true;
            }
          } else if (current.value === value) {
            this.getCurrentNodeValue(current);
            this.getLeftNodeValue(current);
            this.getRightNodeValue(current);
            break;
          }
      }
    }
  
delete(value){

}   

    getCurrentNodeValue(node){
  console.log( "Oh, you found me D:\nmy value: " + node.value);
    }
  
    getRightNodeValue(node){
  if(node.right){
       console.log("\nmy right node value: " + node.right.value);
  }else{
      console.log("\nI've no right nodes");
  }
    }
  
    getLeftNodeValue(node){
      if(node.left){
        console.log("\nmy left node value: " + node.left.value);
      }else{
  console.log("\nI've no left nodes");
      }
        }
  }
 
class Node {
    constructor(value) {
      // value - integer     - value being contained in the node
      this.value = value;
      // left  - Node/object - the left node which itself may be another tree
      this.left = null;
      // right - Node/object - the right node which itself may be another tree
      this.right = null;
    }
  }