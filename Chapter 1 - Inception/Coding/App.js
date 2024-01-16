/* 

<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
    </div>
</div>

ReactcreateElement(Object) => HTML(Browser Understands)

*/


const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
    React.createElement("h1", {}, "I'm an h1 tag")))


console.log(parent);  // type = object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
