/*

  Given two sorted singly linked lists, your task is to combine them into a single sorted linked list. The new list should be composed of the nodes from the two original lists and should also be sorted in ascending order (where node values are equal to or increase as you move through the linked list).

  Example test cases:

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  function createLinkedList(arr) {
    let head = new ListNode(0);
    let current = head;
    arr.forEach(val => {
      current.next = new ListNode(val);
      current = current.next;
    });
    return head.next;
  }
  function printLinkedList(head) {
    let current = head;
    let listStr = '';
    while (current !== null) {
      listStr += current.val + ' -> ';
      current = current.next;
    }
    listStr += 'null';
    console.log(listStr);
  }

  let list1 = createLinkedList([1, 3, 5]);
  let list2 = createLinkedList([2, 4, 6]);
  printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

  let list3 = createLinkedList([1, 2, 3]);
  let list4 = createLinkedList([]);
  printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

  let list5 = createLinkedList([]);
  let list6 = createLinkedList([1]);
  printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

  let list7 = createLinkedList([1, 5, 9]);
  let list8 = createLinkedList([2, 4, 6, 8, 10]);
  printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

  let list9 = createLinkedList([1, 2, 5]);
  let list10 = createLinkedList([3, 6, 7]);
  printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null

*/

function mergeSortedLists(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;
  let curr = new ListNode();
  let head = curr;

  while (curr1 || curr2) {
    let val1 = curr1 ? curr1.val : Infinity;
    let val2 = curr2 ? curr2.val : Infinity;

    if (val1 <= val2) {
      curr.next = new ListNode(curr1.val)
      curr = curr.next;
      curr1 = curr1.next;
    } else {
      curr.next = new ListNode(curr2.val)
      curr = curr.next;
      curr2 = curr2.next;
    }
  }

  return head.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
                                                                                                            
function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function printLinkedList(head) {
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}
                                                                                                            
let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
                                                                                                            
let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null
                                                                                                            
let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null
                                                                                                            
let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null
                                                                                                            
let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
