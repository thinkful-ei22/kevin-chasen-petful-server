class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      this.last.prev =  node;
    }
    this.last = node;
  }
  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = node.prev;
    if(this.first){
      this.first.next = null;
    }
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;