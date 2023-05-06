const preOrderTraverse = (node, array) => {
  if (!node) {
    return array;
  }
  // add the node's value to the array
  array.push(node.value);
  // go to left
  array = preOrderTraverse(node.left, array);
  // go to right
  array = preOrderTraverse(node.right, array);
  return array;
};

const inOrderTraverse = (node, array) => {
  if (!node) {
    return array;
  }
  // go to left
  array = inOrderTraverse(node.left, array);
  // add the node's value to the array
  array.push(node.value);
  // go to right
  array = inOrderTraverse(node.right, array);
  return array;
};

const postOrderTraverse = (node, array) => {
  if (!node) {
    return array;
  }
  // go to left
  array = postOrderTraverse(node.left, array);
  // go to right
  array = postOrderTraverse(node.right, array);
  // add the node's value to the array
  array.push(node.value);
  return array;
};
