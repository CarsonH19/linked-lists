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
      count++
    }
    return current;
  }
}