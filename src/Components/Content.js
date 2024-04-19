import { useEffect, useState } from "react"

// NOTE //
// 1. Callback luôn được gọi sau khi component 
// 2. Cleanup function luôn được gọi sau khi component unmounted
const tabs = ['posts', 'albums', 'comments']
function Content() {
    const [text, setText] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        // document.title = text
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        console.log("scroll");
        // Cleanup function
        // return () => {
        //     window.removeEventListener('scroll', handleScroll)
        // }
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1)
            console.log(timer);
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    const BackToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            {countdown}
            {tabs.map(tab => (
                <button 
                    style={type === tab ? {
                        color: '#fff',
                        backgroudColor: '#000000',
                    } : {}}  
                    key={tab} 
                    onClick={() => setType(tab)}
                >{tab}
                </button>
            ))}
            <input value={text} onChange={(e) => (setText(e.target.value))}/>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button onClick={BackToTop} style={{position: 'fixed', bottom: '20px', right: '20px'}}>Go to top</button>
            )}
        </div>
    )
}

export default Content