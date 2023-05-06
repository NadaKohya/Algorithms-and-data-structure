class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    // adds an item to the end of the array\
    // the last item has index of length-1, so if we want to add new item, its index should be length
    const index = this.length;
    this.data[index] = value;
    this.length++;
    console.log(this.data);
  }

  pop() {
    // removes an item from the end of the array
    // const index = this.length - 1;
    // delete this.data[index];
    // this.length--;
    // console.log(this.data);
    // return this.data[index];
    // we can also use delete here instead
    return this.delete(this.length-1);
  }

  get(index) {
    // returns an item from the array
    console.log(this.data[index]);
    return this.data[index];
  }

  delete(index) {
    // deletes an item from the array wherever its position and then collapses the array
    this.#collapseTo(index);
    return console.log(`Element at index ${index} has been deleted`);
}
#collapseTo(index) {
    for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    console.log(this.data);
    this.length--;
  }
}
const arrayList = new ArrayList();
console.log("--- push ---");
arrayList.push(20);
arrayList.push(30);
arrayList.push(40);
arrayList.push(50);
console.log("--- pop ---");
arrayList.pop();
console.log("--- get ---");
arrayList.get(1);
console.log("--- delete ---");
arrayList.delete(1);
