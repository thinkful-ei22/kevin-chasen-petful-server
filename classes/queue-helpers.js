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

module.exports = {
  peekQueue
};