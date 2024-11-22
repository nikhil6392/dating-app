import React, {useEffect, useState} from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from './axios.js'

const DatingCards = () => {
    const [people, setPeople] = useState([
    //     {
    //         name: "Random Guy", imgUrl: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         name: "Another Guy", imgUrl: "https://images.unsplash.com/photo-1547508446-e097049cade7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         name: "Random Girl", imgUrl: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
    //     },
    //     {
    //         name: "Another Girl", imgUrl: "https://images.unsplash.com/photo-1596245195341-b33a7f275fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D"
    //     },
    //     {
    //         name: "Other Girl",
    //         imgUrl: "https://plus.unsplash.com/premium_photo-1661438493857-d0ff5ae08f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdpcmx8ZW58MHx8MHx8fDA%3D"
    //     }
    // ]
    ])

    useEffect(()=>{
        async function fetchData() {
            const req = await axios.get("/dating/cards")
            setPeople(req.data)
            
        }
        fetchData()
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }

    return (
        <div className="datingCards">
            <div className='datingCards_containers'>
                {people.map((person) => (
                    <DatingCard className='swipe' key = {person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}

export default DatingCards