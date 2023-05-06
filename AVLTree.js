class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.height = 1; // for check balancing
  }

  add(value) {
    // decide to go left or right
    if (this.value > value) {
      // go to left
      // find the correct place to add
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
      // make sure you are updating heights
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
      // make sure you are updating heights
      if (!this.left || this.left.height < this.right.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;
    // ask if this node is out of balance
    if (leftHeight > rightHeight + 1) {
      // out of balance, do I need single or double rotation?
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        // the left child is heavy
        // double rotation rotate on child then on self
        this.left.rotateRR();
      } else {
        // the right child is heavy
        // single, just call rotate on self
        this.rotateLL();
      }
    } else if (rightHeight > leftHeight + 1) {
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;
      const rightRightHeight = this.right.right ? this.right.right.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        // the right child is heavy
        // double rotation rotate on child then on self
        this.right.rotateRR();
      } else {
        // the left child is heavy
        // single, just call rotate on self
        this.rotateLL();
      }
    }
  }

  // just call it if the right child is heavy
  rotateRR() {
    // rotate
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateHeight();
    this.updateHeight();
  }

  // just call it if the left child is heavy
  rotateLL() {
    // rotate
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.reight.reight = rightBefore;
    this.right.value = valueBefore;
    this.right.updateHeight();
    this.updateHeight();
  }

  updateHeight() {
    // calculate the new height
    // if there are no children for this node (leaf node)
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      // height should be one more than onde of its children
      this.height = this.left.height + 1;
    } else {
      // height should be one more than onde of its children
      this.height = this.right.height + 1;
    }
  }
}
