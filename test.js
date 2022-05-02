// class Stack {
//     constructor(){
//         this.stack = []
//     }
//     push(element) {
//      return this.stack.push(element)
//     }

//     pop() {
//       return this.stack.pop()
//     }

//     peek() {
//       return this.stack[this.stack.length-1]
//     }

//   }

// const v = new Stack//?
// v.push(2)//?
// v.push(3)//?
// v.push(4)//?
// v.push(5)//?
// v.pop()
// v.peek()//?
// v//?

// const s = {'rere':32}
// s.rere//?

//   class Bob{
//       constructor(width, hight){
//         this.width=width
//         this.hight =hight
//       }

//   }

//   const x = new Bob(5,"длинный")
//   //?

class Queue {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new Queue(value);
    if (!this.head || !this.tail) {
      this.head = newNode; 
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  dequeue() {
    if (!this.head) {
        return null;
      }
    
      const deletedHead = this.head;  

      if (this.head.next) {
        this.head = this.head.next;
      } else {

        this.head = null;
        this.tail = null;
      }
    
      return deletedHead;
    }
  
}

const x = new Queue();
x.getUnderlyingList();
x.enqueue(5);
// x.getUnderlyingList()
x.enqueue(6);
x.enqueue(7);
x.enqueue(8);
x.enqueue(9);
// x.enqueue(6);
x; //?
x.getUnderlyingList()//?
x.dequeue()
x.getUnderlyingList();
x.dequeue()
x.getUnderlyingList();