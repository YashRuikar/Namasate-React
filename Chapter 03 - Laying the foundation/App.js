import React from "react";
import ReactDOM from "react-dom/client";

// JSX - (transpiled before it reaches the JS Engine) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - (JS Object) => HTMLElement(render)


// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Namasate React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element Render
root.render(heading);


// React Component
// 1) Class Based Component - OLD way of writing component
// 2) Function Based Component - NEW way of writing component

// Arrow Function
const fn = () => true;

const fn2 = () => {
  // Same as above
  return true;
};

// React Functional Component

const HeadingComponent = () => (
    <h1 className="heading">Namasate React Functional Component</h1>
    );
    
const HeadingComponent2 = () => {
    return <h1 className="heading">Namasate React Functional Component2</h1>; // Same as above if only one line is to execute
};
    
const HeadingComponent3 = () => (
    <div id="container">
        <h1 className="heading">Namasate React Functional Component3</h1> 
    </div>   // if code is written in multiple lines then we have to add round brackets around them
)

const Title = () => (
    <h1 className="head" tabIndex="1">
      Namasate React using JSX (Arrow Function)
    </h1>
);

const Title2 = (
    <h1 className="head" tabIndex="1">
      Namasate React using JSX (React Element)
    </h1>
)


// Component Composition

const HeadingComponent4 = () => (
    <div id="containter">

        <h2>{"We can write any JS inside curly brackets"}</h2>

        {console.log("We can console.log inside bracket check browser console")}

        {Title2}
        
        <Title />
        <h1 className="heading">Namasate React Functional Component4</h1>
    </div>
)

// React component render
root.render(<HeadingComponent4 />);