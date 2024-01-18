// Manipulate the HTML DOM using JavaScript

/*
const heading = document.createElement("h1")
heading.innerHTML = `Namasate Everyone`
const root2 = document.getElementById("root")
root.appendChild(heading)
*/

// Manipulate the HTML DOM using React

/* 

<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>

    <div id="child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>

ReactcreateElement(Object) => HTML(Browser Understands)

*/

// const parent = React.createElement("div", {}, "Hello")


// Create nested React elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);


console.log(parent); // type = object

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(parent);