////////////////////////////////////STACK//////////////////////////////////////

// Node class that represents each item
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // Initialize the stack values
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Return the size of the stack
  getSize() {
    return this.size;
  }

  // Return if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the top of the stack
  peek() {
    return this.first ? this.first.value : null;
  }

  // Insert a new item to the top of the stack
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  // Remove the top item from the stack
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  // Return the stack as an array
  getAllValues() {
    let temp = this.first;
    const stackArray = [];
    while (temp) {
      stackArray.push(temp.value);
      temp = temp.next;
    }
    return stackArray;
  }

  // Search for a value in the stack
  searchInStack(val) {
    let temp = this.first;
    while (temp) {
      if (temp.value === val) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  // Reverse the stack
  reverse() {
    let prev = null;
    let current = this.first;
    this.last = current;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.first = prev;
  }

  // Implement iterator
  [Symbol.iterator]() {
    let current = this.first;
    return {
      next: () => {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

// Function to test stack functionality
function testStackFunction() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log("Stack size after pushes:", stack.getSize()); // 4
  stack.pop();
  console.log("Stack size after pop:", stack.getSize()); // 3
  console.log("Search for value 1 in stack:", stack.searchInStack(1)); // true
  console.log("All values in stack:", stack.getAllValues()); // [3, 2, 1]
  stack.reverse();
  console.log("All values in stack after reverse:", stack.getAllValues()); // [1, 2, 3]
}

testStackFunction();

/////////////////////////////////////////////////////////////////////////

////////////////////////////////////QUEUE//////////////////////////////////////

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Return the size of the queue
  getSize() {
    return this.size;
  }

  // Add a new item to the end of the queue
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Remove an item from the front of the queue
  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  // Return the list of queue items
  getAllValues() {
    let temp = this.first;
    const queueArray = [];
    while (temp) {
      queueArray.push(temp.value);
      temp = temp.next;
    }
    return queueArray;
  }

  // Search for a value in the queue
  searchInQueue(val) {
    let temp = this.first;
    while (temp) {
      if (temp.value === val) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  // Reverse the queue
  reverse() {
    let prev = null;
    let current = this.first;
    this.last = current;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.first = prev;
  }

  // Implement iterator
  [Symbol.iterator]() {
    let current = this.first;
    return {
      next: () => {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

function testQueueFunction() {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log("Queue size after enqueues:", queue.getSize()); // 4
  queue.dequeue();
  console.log("Queue size after dequeue:", queue.getSize()); // 3
  console.log("All values in queue:", queue.getAllValues()); // [2, 3, 4]
  console.log("Search for value 2 in queue:", queue.searchInQueue(2)); // true
  queue.reverse();
  console.log("All values in queue after reverse:", queue.getAllValues()); // [4, 3, 2]
}

testQueueFunction();

//////////////////////////////////////////////////////////////////////
