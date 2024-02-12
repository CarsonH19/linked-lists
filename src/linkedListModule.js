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
    if (!this._head) return null;
    let current = this._head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    if (previous) {
      previous.nextNode = null;
      this._tail = previous;
    } else {
      this._head = null;
      this._tail = null;
    }
    this._length--;
    return current;
  }

  contains(value) {
    let current = this._head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this._head;
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
    let result = "";
    let current = this._head;
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }
}
