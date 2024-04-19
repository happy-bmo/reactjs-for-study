import { useState } from "react";

function TodoList() {
    const [jobs, setJobs] = useState(() => {
        const storage = JSON.parse(localStorage.getItem("jobs")) ?? []
        return storage
    })
    const [job, setJob] = useState('')

    const handleAddToList = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem("jobs", jsonJobs)
            return newJobs
        })
        setJob('')
    }

    const handleDelete = (indexToDelete) => {
        setJobs((prev) => {
            const deleteJob = prev.filter((_,index) => index !== indexToDelete )
            const jsonJobs = JSON.stringify(deleteJob)
            localStorage.setItem("jobs", jsonJobs)
            return deleteJob
        })
    }
    return (
        <div>
            <h1>Bài tập To do list</h1>
            <input value={job} onChange={e => setJob(e.target.value)}/>
            <button onClick={handleAddToList}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => handleDelete(index)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList