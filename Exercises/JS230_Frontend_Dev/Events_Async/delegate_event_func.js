/*

Implement a function named delegateEvent that delegates events to the descendant (inner) elements of a parent element that match a given selector. The function takes four arguments: parentElement, selector, eventType, and callback. It returns true if it was able to add an event listener and undefined if it wasn't. For example, if the parentElement is section and selector is p, the function should delegate events of eventType on the p element within section to the function callback; consequently, the function returns true.

Assume that all event handlers listen during the bubbling phase.

Use this markup and the following scenarios to test your implementation:

HTML:

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Event Delegation Function</title>
  </head>
  <body>
    <main>
      <section>
        <h1>Header</h1>
        <p>Content</p>
      </section>
      <aside>
        <h2>Sub Side Notes</h2>
        <p>Note 1</p>
        <p>Note 2</p>
      </aside>
    </main>
    <nav>
      <p>Side Note</p>
    </nav>
  </body>
</html>

Notes on the scenarios:

* Each scenario is independent of the others.
* Assume that delegateEvent runs before the described scenario occurs.

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

Scenario 1: delegateEvent(element1, 'p', 'click', callback);
* The function executes and returns undefined.
* It doesn't add an event listener to any elements.

Scenario 2: delegateEvent(element2, 'p', 'click', callback);
* The function executes and returns true.
* It adds a click event listener to element2.
* If you click anywhere on the page, the callback function does not trigger.

Scenario 3: delegateEvent(element2, 'h1', 'click', callback);
* The function executes and returns true.
* It adds a click event listener to element2.
* If you click anywhere on the page, the callback function does not trigger.

Scenario 4: delegateEvent(element3, 'h1', 'click', callback);
* The function executes and returns true.
* It adds a click event listener to element3.
* If you click the h1 element that contains the text "Header," the callback function should trigger and display an alert message, e.g., 'Target: H1\nCurrent Target: MAIN'.
* If you click anywhere else, the callback function does not trigger.

Scenario 5: delegateEvent(element3, 'aside p', 'click', callback);
* The function executes and returns true.
* It adds a click event listener to element3.
* If you click a p element that is a descendant of aside element inside main, the callback function should trigger and display an alert message, e.g., 'Target: P\nCurrent Target: MAIN'.
* If you click anywhere else, the callback function does not trigger.

Scenario 6: delegateEvent(element2, 'p', 'click', callback);
* The function executes and returns true.
* It adds a click event listener to element2.
* If you click anywhere on the page, the callback function does not trigger.
* Run this code:
  const newP = document.createElement('P');
  const newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);
* If you click the p element that contains the text "New Paragraph", the callback function should trigger and display an alert message, e.g., 'Target: P\nCurrent Target: H1'.
* If you click anywhere else, the callback function does not trigger.

*/

document.addEventListener('DOMContentLoaded', () => {
  let added;

  function walk(node, element, eventType, callback) {
    if (node === null) return;

    if (
      node.tagName === element.tagName &&
      element.parentElement.contains(node)
    ) {
      element.addEventListener(eventType, callback);
      added = true;
    } 

    for (let index = 0; index < node.children.length; index += 1) { // for each child node
      walk(node.children[index], element, eventType, callback);                         // recursively call walk()
    }
  }

  function delegateEvent(parentElement, selector, eventType, callback) {
    let element = parentElement.querySelector(selector);

    walk(parentElement, element, eventType, callback);

    return added;
  }

// --- TESTING ---
  // Possible elements for use with the scenarios
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main section');
  const element3 = document.querySelector('main');
  // Possible callback for use with the scenarios
  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };

  // console.log(delegateEvent(element1, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));
  console.log(delegateEvent(element2, 'p', 'click', callback));

  const newP = document.createElement('P');
  const newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);
});

