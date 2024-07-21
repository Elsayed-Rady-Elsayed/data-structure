//////////////////////////////STACK//////////////////////////////////////
//node item that represent each item in the stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //intialize the stack values
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //return the size of stack
  stackSize() {
    return this.size;
  }
  //return if the stack is empty
  isEmpty() {
    return this.size > 0 ? false : true;
  }
  //return the top of the stack
  peek() {
    return this.size > 0 ? this.first.value : null;
  }
  //insert new item to the top of the stack
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // remove the top item from stack
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  //return the stack array
  getAllValues() {
    let temp = this.first;
    let stackArray = [];
    while (temp != null) {
      stackArray.push(temp.value);
      temp = temp.next;
    }
    return stackArray;
  }
  //srach in the stack
  searchInStack(val) {
    var temp = this.first;
    while (temp != null) {
      if (temp.value === val) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.size);
stack.pop();
console.log(stack.size);
console.log(stack.searchInStack(1));
console.log(stack.getAllValues());
////////////////////////////////////////////////////////////////////
