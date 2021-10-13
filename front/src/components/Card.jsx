import React from 'react'
import styles from '../styles/Card.module.css'
import { useState } from 'react'

export const Card = ({name, type, children, rating}) => {

    const [myrating, setMyRating] = useState(rating)
    const [show, setShow] = useState(true)
    const [showCard , setShowCard] = useState(true)

    // const handleRating = (e) => {
    //     console.log(e.target.value)
    //     // const [value] = e.target
    //     setMyRating(e.target.value)
    // }
    // const styleInput = inputFocus ? 
    const rating_confi = show ? myrating : <input onChange={(e) => setMyRating(e.target.value)} type="number" placeholder="Rate this lawyer" value={myrating}></input>

    if(!showCard){
        return (
            <div className={styles.card}>
                <button onClick={() => setShowCard(!showCard)}>Show Lawyer</button>
            </div>
        )
    }


    return (
      
        <div className={styles.card}>
                <button onClick={() => setShowCard(!showCard)}>Show Lawyer</button>
                <h1 >{children}</h1>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100%"}}/>
                <div className={styles.container}>
                <h4><b>{name}</b></h4>
                <h5>{rating_confi} <button onClick={() => setShow(!show)}>Edit</button> </h5>
                <p>{type.map(el => <p>{el}</p>)}</p>
                </div>
            </div>
          

       
    )
}
