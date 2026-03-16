# Customer Support Tcket System (Support-Sphere)

### Live-Link : https://support-spheres.netlify.app/

# React Basic Questions & Answers

## 1. What is JSX, and why is it used?

JSX stands for **JavaScript XML**. It is a syntax used in React that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to design the user interface because the structure of the UI looks similar to HTML.

In React, JSX helps developers describe how the UI should look in a simple and readable way. Although it looks like HTML, it is actually converted into normal JavaScript by tools such as **Babel** before the browser runs it.

Example:

```javascript
const element = <h1>Hello React</h1>;
```

Using JSX makes the code easier to understand and helps combine UI structure and logic in the same place.

---

## 2. What is the difference between State and Props?

**State** and **Props** are both used to store and manage data in React components, but they are used in different ways.

**Props (Properties)** are used to pass data from a parent component to a child component. Props are read-only, which means a component cannot modify the props it receives.

**State**, on the other hand, is data that belongs to a specific component and can change over time. When state changes, React automatically re-renders the component to update the UI.

In simple terms:

* **Props → passed from parent to child**
* **State → managed inside the component**

---

## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage state. Before hooks were introduced, state could only be used in class components.

The `useState` hook returns two values:

1. The current state value
2. A function to update that state

Example:

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

When the state is updated using the setter function (`setCount`), React automatically updates the component and re-renders the UI.

---

## 4. How can you share state between components in React?

State can be shared between components by **lifting the state up** to a common parent component. The parent component stores the state and then passes it to child components using props.

Example idea:

* Parent component holds the state
* Child components receive the state through props

This allows multiple components to use the same data and stay synchronized.

Other methods for sharing state include:

* React Context API
* State management libraries like Redux

---

## 5. How is event handling done in React?

Event handling in React is similar to HTML events but uses **camelCase syntax** and functions.

Instead of writing events like `onclick`, React uses `onClick`.

Example:

```javascript
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

In React, you pass a function to the event handler. When the event occurs, the function is executed.

Common React events include:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseOver`

These events help make React applications interactive and responsive to user actions.
