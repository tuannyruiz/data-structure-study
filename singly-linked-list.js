// We're going to store a piece of data, let's call it 'val'
// And we're going to store a reference to next node, let's call it 'node'

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Before creating SinglyLinked List that's how we would create
// a linked list:

// var first = new Node("Hi");
// first.next = new Node ("there");
// first.next.next = new Node ("How");
// first.next.next.next = new Node ("are");
// first.next.next.next.next = new Node ("you");

// It's not the best way to do it since everytime we need to add
// a new item to the list we would have to add one more .next().
// With a SinglyLinkedList class, we're able to do it like this:

// var list = new SinglyLinkedList();
// list.push("Hello");
// list.push("there");
// list.push("How");
// list.push("are");
// list.push("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push (val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  
    this.length++;

    return this;
  }

  // traverse() {
  //   var current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop () {
    if (!this.head) {
      return undefined;
    }

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift () {
    if (!this.head) {
      return undefined;
    }

    var oldHead = this.head;
    this.head = oldHead.next;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldHead;
  }

  unshift (val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get (index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set (index, newValue) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = newValue;
      return true;
    }
    
    return false;
  }
}

let link = new SinglyLinkedList();
link.push(1);
link.push(10);
link.push(15);
