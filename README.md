# Namasate-React


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - writeen in C++
- Caching - Faster Builds
- Image Optmization
- Minification 
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Food Ordering App

My food app structure will look like this,
    
    1) Header
        - Logo
        - Nav Items(right side)
        - Cart

    2) Body
        - Search Bar
        - Resturant List
            - Resturant Card
                - Image
                - Name
                - Rating
                - Cuision

    3) Footer
        - Links
        - Copyright


# Two types of Export/Import

- 1) Default Export/Import

    export default Component
    import Component from "path"


- 2) Named Export/Import

    export const Component
    import {Component} from "path"



# React Hooks
 (Normal JS utility functions)

- 1) useState()  - Superpowerful state variables in react
- 2) useEffect()


# 2 types Routing in web apps

- Cilent Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch (action)
- Selector

# Types of testing (developer)

- Unit Testing
- Integeration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel 
- Configure Parcel Config file to disable defualt babel transpilation
- Jest -npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom