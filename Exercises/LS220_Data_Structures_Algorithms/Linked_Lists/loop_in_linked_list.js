/*

  Given the starting node (head) of a singly linked list, your task is to find whether the linked list contains a loop. A loop in a linked list exists when a node can be revisited by continuously following the next pointers.

  You should return true if the linked list forms a loop (sometimes referred to as a circular list or a cyclic list) and false if it does not.

  This problem is very tricky. Try it for 15-20 minutes and then check the provided Hint

  Example test cases:

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  function createLinkedList(arr, cyclePos) {
    let head = new ListNode(0);
    let current = head;
    let cycleNode = null;

    arr.forEach((val, index) => {
      current.next = new ListNode(val);
      current = current.next;
      if (index === cyclePos) {
        cycleNode = current;
      }
    });

    if (cycleNode) {
      current.next = cycleNode;
    }

    return head.next;
  }

  let list1 = createLinkedList([3, 2, 0, -4], 1);
  let list2 = createLinkedList([1, 2], 0);
  let list3 = createLinkedList([1], -1);
  let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
  let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

  console.log(hasCycle(list1)) // true
  console.log(hasCycle(list2)) // true
  console.log(hasCycle(list3)) // false
  console.log(hasCycle(list4)) // true
  console.log(hasCycle(list5)) // false

*/

function hasCycle(head) {
  let outerContainer = [];
  let innerContainer = [];
  let curr = head;

  while (curr) {
    if (innerContainer.includes(curr.val)) {
      outerContainer.push(innerContainer);
      innerContainer = [];
      if (isRepeating(outerContainer)) return true;
    }
    innerContainer.push(curr.val);
    curr = curr.next;
  }

  return false
}

function isRepeating(arr) {
  let subArr1 = arr[arr.length - 2];
  let subArr2 = arr[arr.length - 1];
  return String(subArr1) === String(subArr2);
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
                                                           
function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;
                                                           
  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });
                                                           
  if (cycleNode) {
    current.next = cycleNode;
  }
                                                           
  return head.next;
}
                                                           
let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);
                                                           
console.log(hasCycle(list1)) // true
console.log(hasCycle(list2)) // true
console.log(hasCycle(list3)) // false
console.log(hasCycle(list4)) // true
console.log(hasCycle(list5)) // false
