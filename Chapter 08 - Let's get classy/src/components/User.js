import { useEffect, useState } from "react"

// functional component

const User = ({name}) => {
    const [count, setCount] = useState(0)
    const [count2] = useState(1)

    useEffect(() => {
        // Api calls
    }, [])

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Sangli</h3>
            <h4>Contact: @yashruikar</h4>
        </div>
    )
}

export default User