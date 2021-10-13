import React from 'react'
import {Card} from './Card'
import data from '../constants/lawyers.js'
import { useState } from 'react'



export const Cards = () => {

    const [lawyersData, setLawyersData] = useState(data)

    const removeLawyer = (id) => {
        const data_new_array = lawyersData.filter(lawyer => lawyer.id !== id)
        setLawyersData(data_new_array)
    }


    return (
        <div>
            {lawyersData.length > 0 && lawyersData.map( (card, index) => {
                return (
                <Card
                    id={index}
                    genre={card.genre   }
                    name={card.name}
                    type={card.type}
                    rating={card.rating}
                    removeLawyer={removeLawyer}
                > 
                <form action={`mailto:${card.mail}`}>
                    <button type="submit">Contact</button>
                </form>
                </Card>)
            })}
        </div>
    )
}
