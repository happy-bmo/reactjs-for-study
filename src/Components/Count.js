import { useState } from "react"
function Count() {
    const [count, setCount] = useState(1)

    const HandleCounter = () => {
      setCount(count + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={HandleCounter}>Count + 1</button>
        </div>
    )
}
export default Count