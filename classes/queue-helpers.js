const peekQueue = queue => {
  // return stack.top.data;
  var node = queue.first;
  if(node){
    return node.value;
  }
  else {
    return false;
  }
};

const displayQueue= queue => {
  // return stack.top;
  const queueDisplay = {};
  let currNode = queue.first;
  let position = 0;
  while (currNode) {
    // add node to list obj
    queueDisplay[`node${position}`] = 
    { data: currNode.value, 
      // prev: currNode.prev ? currNode.prev.value : null,
      // next: currNode.next ? currNode.next.value: null 
    };
    // move to the next node
    currNode = currNode.prev;
    position++;
  }
  // console.log(stackDisplay);
  return queueDisplay;
};

module.exports = {
  peekQueue,
  displayQueue
};