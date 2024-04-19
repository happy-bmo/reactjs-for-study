import { useState } from "react"
const gifts = [
    'CPU i9',
    'Keyboard RGB',
    'RAM 32GB'
]

function Gift() {
    const [gift, setGift] = useState()

    const handleGetGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }

    return(
        <div>
            <h1>Bài tập Gift</h1>
            <h2>{gift || "Chưa có phần thưởng" }</h2>
            <button onClick={handleGetGift}>Lấy thưởng</button>
        </div>
    )
}

export default Gift