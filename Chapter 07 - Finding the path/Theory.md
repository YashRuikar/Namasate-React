# Chapter 07 - Finding the path


## Q: What are various ways to `add images` into our App? Explain with `code examples`.

Using the `full URL of the images` for the web (CDN) or any public images. 

Example:

```javascript
<img src="https://react.org/logo-og.png" alt="React Image" />
```

Adding the image into the project `Drag your image into your project` and `import it` into the desired component

```javascript
import reactLogo from "./reactLogo.png"
export default function App() {
    return <img src="{reactLogo}" alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.


```javascript
import reactLogo from "../../assets/images/reactLogo.png"
export default function App() {
    return <img src={reactLogo} alt="react logo" />
}
```


## Q: What would happen if we do `console.log(useState())`?

If we do `console.log(useState())`, we get an array `[undefined, function]` where first time in an array is `state` is `undefined` and the second item in an array is `setState` function is bound dispatchSetState.


## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

Syntax of `useEffect` is:

```javascript
useEffect(() => {}, [])
```


Case 1: When the `dependency array is not included` in the aruguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.


```javascript
useEffect(() => {
    console.log("I run everytime this component renders")
})
```


Case 2: When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the inital render of the component.


```javascript
useEffect(() => {
    console.log("I only run once (When the component gets mounted)")
}, [])
```


Case 3: When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rendered if there is a `change in the condition`.


```javascript
useEffect(() => {
    console.log("I run every-time when my condition changed")
}, [condition])
```


## Q: What is `SPA`?

`Single Page Application (SPA)`, is a web application that dynamically updates the webpage with data from web sever without reloading/refreshing the entire page. All the HTML, CSS, JS are retrived in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.



## Q: What is the difference between `Cilent Side Routing` and `Server Side Routing`?

In `Server-side routing or renderning (SSR)`, every change in URL, http request is made to server to fetech the webpage, and replace the current webpage with the older one.


In `Cilent-side routing or rendering (CSR)`, during the first load, the webpage is loaded from server to cilent, after which whenever there is a chance in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses cilent-side routing`