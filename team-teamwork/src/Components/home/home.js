import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Home = props => {
    const [rooms, setRooms] = useState()

    useEffect(() => {
        Axios
            .get("http://lambda-mud-test.herokuapp.com/api/adv/rooms/")
            .then(res => {                
                setRooms(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])
    console.log("rooms", rooms)
    return (
        <div>
            <p>Hello</p>
        </div>
    )
}

export default Home