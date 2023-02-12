import React from "react";
import { useState } from 'react'
import Validation from "./Validation";
import './Form.module.css'

export default function Form() {
    const [userData, setUserData] = useState(
        { username: '', password: '' });

    const [errors, setErrors] = useState(
        { username: '', password: '' });

    const handleInputChange = (event) => {
        setUserData({...userData, [event.target.name]:event.target.value})      // csdcs@gmail.com  y   123456
        setErrors(Validation({...userData, [event.target.name]:event.target.value}))
    }

    return(
        <div>
            <form action="">
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
                <button>LOGIN</button>
            </form>
        </div>
    )
}