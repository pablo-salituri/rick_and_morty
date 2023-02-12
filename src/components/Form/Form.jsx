import React from "react";
import { useState } from 'react'
import Validation from "./Validation";
import './Form.module.css'

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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder='username' 
                    name='username' 
                    type="text" 
                    value={userData.username} 
                    onChange={handleInputChange}
                    className = {errors.username && 'warning'}    
                />
                <p className='danger'>{errors.username}</p>
                
                <label htmlFor="password">Password</label>
                <input placeholder='password' 
                    name = 'password' 
                    type="text" 
                    value={userData.password} 
                    onChange={handleInputChange}
                    className = {errors.password && 'warning'}    
                />
                <p className='danger'>{errors.password}</p>
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    )
}