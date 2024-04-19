import { useState } from "react"

function Info() {
    const [info, setInfo] = useState({
        name: "Duy",
        age: "20"
    })

    const HandleUpdate = () => {
        setInfo((prevInfo) => ({
          ...prevInfo,
          bio: "huh"
        }))
    }

    const RenderInfo = () => {
        return Object.keys(info).map((key, index) => (
          <p key={index}>{key}: {info[key]}</p>
        ))
    }
    return(
        <div>
            <h1>Bài tập info</h1>
            <h2>Info: </h2>
            {RenderInfo()}  
            <button onClick={HandleUpdate}>Update</button>
        </div>
    )
}



export default Info