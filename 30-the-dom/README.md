# Intro To The DOM JS


























### The Document Object Model
* What is the DOM?
  * Object-oriented representation of the webpage which allows programs to manipulate the properties and contents on the page
  * When HTML is compiled, the DOM is created based on that HTML
  * Javascript is a language created to manipulate the DOM

* Brief tour of Developer Tools
  * Open the Dev Tools by right-clicking on the page and selecting 'View Page Source' from the context menu
  * View DOM in the 'Elements' tab
    * Show that HTML is directly editable in the main panel
    * Show 'Styles' tab to view and manipulate CSS
    * Show pointer feature to find elements by hovering over the DOM
  * JS Console

### CSS Selectors
* Individual selectors
  * Class `.class`
  * ID `#id`
  * Tag `div`
* Combining Selectors
  * Space between `#parent .child`
  * Chain `div.image.highlighted`

### Selecting DOM Nodes
* Understand types that are returned form selecting a DOM node with JavaScript
* Understand how to use CSS selectors
* Methods

  ```js
  node.querySelector('#unique-element')
  node.querySelectorAll('.some-shared-class')
  node.getElementsByTagName('body')[0]
  node.getElementById('unique-element')
  node.getElementsByClassName('some-shared-class')
  ```
  * Mention that `NodeList` is array-like, but does not have iterators built on it. Can be borrowed from `Array.prototype`
  * Chain CSS selectors to get greater specificity

### Modifying DOM Nodes
* Storing node in a variable `let body = document.querySelector('body')`
* Changing attributes `body.style.backgroundColor = red`
* `innerText` and `textContent` vs. `innerHTML`
* Removing elements `document.removeChild(body)`

### Creating DOM Objects
* Instantiating new elements `let element = document.createElement('img')`
* Adding attributes to elements `element.src = 'http://www.coooolimage.com'`
* Appending to node `document.body.appendChild(element)`

### Activity
Students will go to their favorite websites and modify the DOM programmatically. Wikipedia and Twitter are good examples.

* Students should:
  * Select elements and save them to variables
  * Delete at least 2 elements
  * Modify elements (e.g., replace image url, change text, change CSS)
  * Create new elements and add to page
