class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      // if you are pushing in an empty list
      this.head = node;
    } else {
      this.tail.pointer = node;
    }
    // whatever you are pushing into a list is definitely going to be the last item
    this.tail = node;
    console.log("--- push " + value + " ---");
  }

  pop() {
    const index = this.length - 1;
    console.log("--- pop ---");
    return this.delete(index);
  }

  find(index) {
      console.log("--- find node at index " + index + " ---");
    if (index >= this.length) {
        console.log("--- there is no such index ---");
        return null;
    }
    let current = this.head;
    // if the index is the index of the head, It won't enter the loop
    for (let i = 0; i <= index-1; i++) {
      current = current.pointer;
    }
    if(current){
        console.log(current);
        return current;
    }else{
        return null;
    }
  }

  get(index) {
    const node = this.find(index);
    if (!node) {
      // void 0 returns undefined
      return void 0;
    }
    console.log("--- get at index " + index + " ---");
    console.log(node?.value);
    return node?.value;
  }

  delete(index) {
    //   debugger
    // if you want to delete the head
    if (index === 0) {
      const node = this.head;
      // if there is more than one node in the list let the pointer node be the head
      if (node) {
        this.head = node?.pointer;
      } else {
        this.head = null;
        this.tail = null;
        console.log("can't find any node in the list");
      }
      this.length--;
      if (node?.value) {
        console.log("--- delete " + node?.value + " ---");
      }
      return node?.value;
    }
debugger
    const node = this.find(index-1);
    const element = node?.value;
    if (!element) {
      return null;
    }
    node.pointer = element.pointer;
    if (!node.pointer) {
      this.tail = node.pointer;
    }
    this.length--;
console.log("--- delete " + element + " ---");
    return element;
  }
}

// pop doesn't console delete
// delete more than length doesn't work

const linkedList = new LinkedList();
linkedList.push(1);
console.log("\n------------------\n");
linkedList.push(2);
console.log("\n------------------\n");
linkedList.push(3);
console.log("\n------------------\n");
linkedList.push(4);
console.log("\n------------------\n");
linkedList.find(0);
console.log("\n------------------\n");
linkedList.get(0);
console.log("\n------------------\n");
//linkedList.pop();
console.log("\n------------------\n");
linkedList.delete(4);
// linkedList.delete(1);
