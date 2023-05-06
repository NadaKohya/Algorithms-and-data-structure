//// recursively
// const breadthFirstTreeTraverse = (queue, array) => {
//   if (!queue.length) {
//     return array;
//   }
//   // enqueue
//   const node = queue.shift();
//   // process => add to final array
//   array.push(node.value);
//   //queue
//   if (node.left) {
//     queue.push(node.left);
//   }
//   if (node.right) {
//     queue.push(node.right);
//   }
//   return breadthFirstTreeTraverse(queue, array);
// };
//// iteratively
//// easier to read
const breadthFirstTreeTraverse = (queue, array) => {
  while (queue.length) {
    // enqueue
    const node = queue.shift();
    // process => add to final array
    array.push(node.value);
    //queue
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return array;
};
