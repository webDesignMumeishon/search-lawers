import React from 'react'
import {Card} from './Card'
import data from '../constants/lawyers.js'



export const Cards = () => {

    console.log(data)

    return (
        <div>
            {data.length > 0 && data.map( card => {
                return (
                <Card
                    name={card.name}
                    type={card.type}
                    rating={card.rating}
                > 
                <form action={`mailto:${card.mail}`}>
                    <button type="submit">Contact</button>
                </form>
                </Card>)
            })}
        </div>
    )
}
