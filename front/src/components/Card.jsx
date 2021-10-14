import React from 'react'
import styles from '../styles/Card.module.css'
import { useState, useEffect, useContext } from 'react'
import {ThemeContext} from './Cards'
import CardBody from './elements/Card'

export const Card = ({name, type, children, rating, removeLawyer, id, genre, length}) => {
    const [myrating, setMyRating] = useState(rating)
    const [show, setShow] = useState(true)
    const [showCard , setShowCard] = useState(true)

    const numberOfLawyers= useContext(ThemeContext)

    const rating_confi = show ? myrating : <input onChange={(e) => setMyRating(e.target.value)} type="number" placeholder="Rate this lawyer" value={myrating}></input>

    if(!showCard){
        return (
            <div className={styles.card}>
                <button onClick={() => setShowCard(!showCard)}>Show Lawyer</button>
            </div>
        )
    }

    return (
        <CardBody length={length}>
            <h1 >{children}</h1>
            <img src={genre === "male" ? "https://www.w3schools.com/howto/img_avatar.png" : "https://www.w3schools.com/howto/img_avatar2.png"} alt="Avatar" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h4><b>{name}</b></h4>
                <h5 style={{cursor: "pointer"}} onClick={() => setShow(!show)}>{rating_confi}</h5>
                <p>{type.map(el => <p>{el}</p>)}</p>
                <button onClick={() => removeLawyer(id)}>X</button>
            </div>
        </CardBody>





        // <div className={styles.card}>
        //     <h1 >{children}</h1>
        //     <img src={genre === "male" ? "https://www.w3schools.com/howto/img_avatar.png" : "https://www.w3schools.com/howto/img_avatar2.png"} alt="Avatar" style={{width:"100%"}}/>
        //     <div className={styles.container}>
        //         <h4><b>{name}</b></h4>
        //         <h5>{rating_confi} <button onClick={() => setShow(!show)}>Edit</button> </h5>
        //         <p>{type.map(el => <p>{el}</p>)}</p>
        //         <button onClick={() => removeLawyer(id)}>X</button>
        //     </div>
        //  </div>
    )
}
