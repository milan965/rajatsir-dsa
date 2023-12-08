class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      let node = new Node(value);
        let temp = this.head;
  
      if (temp === null) {
        this.head = node;
      } else {
        node.next = temp;
       
        this.head = node;
        
      }
    }
  
    print() {
      let tmp = this.head;
      while (tmp) {
        
        tmp = tmp.next;
      }
    }
  }
  
  let list = new LinkedList();
  list.insert(10);
  list.insert(5);
  list.print();


  //set method duplicate element remove
  // let arr = [2,3,5,6,2,5,6];


  // let set = new Set(arr);


  // set.forEach((v) =>{
  //     console.log(v);
  // })


  //map

  let map = new Map();

  map.set("one",1);
  map.set("two",2);
  map.set("three",3);

  console.log(map);

  