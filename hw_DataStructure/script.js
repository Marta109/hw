class Stack {
  #stack = [];

  constructor(maxSize) {
    this.maxSize = maxSize || 15;
  }

  push(item) {
    if (this.#stack.length >= this.maxSize) {
      throw new Error('Stack overflow. Cannot push item.');
    } else {
      this.#validateItem(item);
      this.#stack.push(item);
    }
  }

  pop() {
    return this.#stack.pop();
  }

  isEmpty() {
    return this.#stack.length === 0;
  }

  length() {
    return this.#stack.length;
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }

  clear() {
    this.#stack = [];
  }
  showStack() {
    return `[${this.#stack}]`;
  }

  static isStackFull(stackInstance, maxSize) {
    return stackInstance.length() === maxSize;
  }

  #validateItem(item) {
    if (typeof item !== 'number' || isNaN(item) || item < 0) {
      throw new Error('Invalid item.');
    }
  }
}

console.log('-------Stack-------------');
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.showStack());
console.log(Stack.isStackFull(stack, 2));

class Queue {
  #queue = [];

  enqueue(item) {
    this.#validateItem(item);
    this.#queue.push(item);
  }

  dequeue() {
    return this.#queue.shift();
  }

  peek() {
    return this.#queue[0];
  }

  isEmpty() {
    return this.#queue.length === 0;
  }

  size() {
    return this.#queue.length;
  }

  clear() {
    this.#queue = [];
  }

  showQueue() {
    return `[${this.#queue}]`;
  }

  static merge(queue1, queue2) {
    const mergedQueue = new Queue();
    if (queue1.isEmpty() || queue2.isEmpty()) {
      return console.error(
        'One or both of the input queues are empty. Cannot merge.',
      );
    }

    while (!queue1.isEmpty()) mergedQueue.enqueue(queue1.dequeue());
    while (!queue2.isEmpty()) mergedQueue.enqueue(queue2.dequeue());
    return mergedQueue.showQueue();
  }

  #validateItem(item) {
    if (typeof item !== 'number' || isNaN(item) || item < 0) {
      throw new Error('Invalid item.');
    }
  }
}

console.log('-------Queue-------------');

const queue = new Queue();
// queue.enqueue(); //error
queue.enqueue(111);
queue.enqueue(1);
queue.enqueue(11);
console.log(queue.dequeue());
console.log(queue.showQueue());
const queue2 = new Queue();
queue2.enqueue(2);
queue2.enqueue(3);
const mergedQueue = Queue.merge(queue, queue2);
console.log(mergedQueue);
