import React from 'react'
import {Card} from './Card'
import data from '../constants/lawyers.js'
import { useState, useEffect, useRef, useReducer } from 'react'
import BTS from './controller/binary-search'

export const ThemeContext = React.createContext();
const initialState = data
const reducer = (state, action) => {
    switch (action.type) {
        case "remove":
            let ans = state.filter((d, i) => i !== action.payload)  
            return ans
        
        case "reset":
            return data
        
        case "add":
            return [
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }

}

export const Cards = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const refForm = useRef(null)

    const removeLawyer = (id) => {
        dispatch({type:"remove", payload: id})
    }

    const addLawyer = (event) => {
        event.preventDefault();
        let newLawyer = {   
            id: 3,
            genre: "mae",
            name: "Didier Destorel",
            type: ["Derecho Civil", "Derecho Penal"],
            location: "Corrientes",
            rating: 5,
            mail: "didi.destorel@gmail.com"
        }
        dispatch({type: "add", payload: newLawyer})
    }

    return (
        <ThemeContext.Provider value={count.length}>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        <div style={{display:"flex"}}>
            {count.length > 0 && count.map( (card, index) => {
                return (
                <Card
                    id={index}
                    genre={card?.genre}
                    name={card?.name}
                    type={card?.type}
                    rating={card?.rating}
                    removeLawyer={removeLawyer}
                    length={count?.length}
                > 
                <form action={`mailto:${card.mail}`}>
                    <button type="submit">Contact</button>
                </form>
                </Card>)
            })}

            
            {/* // id: 1,
            // genre: "female",
            // name: "Sofia Torrent",
            // type: ["Derecho Civil", "Derecho Penal"],
            // location: "Corrientes",
            // rating: 5,
            // mail: "popita.torrent@gmail.com" */}
         

            <h3>Add new lawyer</h3>
            <form ref={refForm} onSubmit={addLawyer}>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button type="submit">Add</button>
            </form>
        </div>
        </ThemeContext.Provider>

    )
}
