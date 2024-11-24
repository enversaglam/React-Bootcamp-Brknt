import React from 'react'
import { useNavigate } from 'react-router-dom'

export const data = [
    {
        id: 0,
        name1: "React",
        description: "React aciklama"
    },
    {
        id: 1,
        name1: "Vue",
        description: "Vue aciklama"
    },
    {
        id: 2,
        name1: "Angular",
        description: "Angular aciklama"
    },
]

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            {
                data.map((dte, ind) => (
                    <div onClick={() => navigate(`detail/${dte.id}`)} style={{ cursor: 'pointer', marginBottom: '30px' }} key={ind}>
                        <div>{dte.name1}</div>
                        <div>{dte.description}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home