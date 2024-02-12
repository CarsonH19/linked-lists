import { Node } from "./nodeModule";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  listSize() {
    return this.length;
  }

  listHead() {
    return this.head;
  }

  listTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.nextNode;
      count++;
    }
    return current;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    if (previous) {
      previous.nextNode = null;
      this.tail = previous;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = '';
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
  }
    result += "null";
    return result;
  }
}
