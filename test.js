class Stack {
    constructor(){
        this.stack = []
    }
    push(element) {
     return this.stack.push(element)
    }
  
    pop() {
      return this.stack.pop()
    }
  
    peek() {
      return this.stack[this.stack.length-1]
    }

  }

const v = new Stack//?
v.push(2)//?
v.push(3)//?
v.push(4)//?
v.push(5)//?
v.pop()
v.peek()//?
v//?

const s = {'rere':32}
s.rere//?

//   class Bob{
//       constructor(width, hight){
//         this.width=width
//         this.hight =hight
//       }

//   }

//   const x = new Bob(5,"длинный")
//   //?

