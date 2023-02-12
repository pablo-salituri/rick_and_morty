import React from "react";
import { useState } from 'react'
import Validation from "./Validation";
import styles from './Form.module.css'

export default function Form({login}) {
    const [userData, setUserData] = useState(
        { username: '', password: '' });

    const [errors, setErrors] = useState(
        { username: '', password: '' });

    const handleInputChange = (event) => {
        setUserData({...userData, [event.target.name]:event.target.value})      
        setErrors(Validation({...userData, [event.target.name]:event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()              // es para anular las recargas de paginas que suceden con los onSubmit
        login(userData)
    }

    return(
        <div className= {styles.divForm}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder='username' 
                    name='username' 
                    type="text" 
                    value={userData.username} 
                    autoComplete='off'
                    onChange={handleInputChange}
                    className = {(errors.username && styles.warning) || styles.input}    
                />
                <p className={styles.danger}>{errors.username}</p>
                
                <label htmlFor="password">Password</label>
                <input placeholder='password' 
                    name = 'password' 
                    type="password" 
                    value={userData.password} 
                    autoComplete='off'
                    onChange={handleInputChange}
                    className = {(errors.password && styles.warning) || styles.input}    
                />
                <p className={styles.danger}>{errors.password}</p>
                <button className={styles.button} type='submit'>LOGIN</button>
            </form>
        </div>
    )
}