import React from "react"
import ReactDOM from "react-dom/client"

// Create nested React elements
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Welcome to Namasate React"),
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