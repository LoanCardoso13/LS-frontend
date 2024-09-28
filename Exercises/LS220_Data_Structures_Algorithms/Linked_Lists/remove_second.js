/*

  In this problem, you are given a singly linked list and you need to remove every alternate node, starting with the second node. As you progress through the list, every second node should be deleted until you reach the end of the list.

  Example test cases:

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  function printLinkedList(head) {
    let currentNode = head;
    let listStr = '';
    while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
    }
    listStr += 'null';
    console.log(listStr);
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

  let list1 = createLinkedList([1, 2, 3, 4, 5]);
  let list2 = createLinkedList([1, 2]);
  let list3 = createLinkedList([1]);
  let list4 = createLinkedList([1, 2, 3, 4]);
  let list5 = createLinkedList([]);

  printLinkedList(removeEverySecondNode(list1)); // Expected: 1 -> 3 -> 5 -> null
  printLinkedList(removeEverySecondNode(list2)); // Expected: 1 -> null
  printLinkedList(removeEverySecondNode(list3)); // Expected: 1 -> null
  printLinkedList(removeEverySecondNode(list4)); // Expected: 1 -> 3 -> null
  printLinkedList(removeEverySecondNode(list5)); // Expected: null

*/
