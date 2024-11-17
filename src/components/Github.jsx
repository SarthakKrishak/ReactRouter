import { useEffect, useState } from "react"

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sarthakkrishak')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center bg-zinc-600 rounded-lg p-5 w-3/5 text-white">
                <img src={data.avatar_url} alt="Git pic" width={300} />

                <div className="mt-4 flex flex-col justify-center items-center">
                    <h1>Bio : {data.bio}</h1>
                    <h1>Followers : {data.followers}</h1>
                    <h1>Location : {data.location}</h1>
                </div>
            </div>
        </div>
    )
}

export default Github