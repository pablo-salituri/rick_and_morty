import React from "react";
import styles from './Detail.module.css'
import {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";


export default function Detail() {
    const {detailId} = useParams()
    const [character, setCharacter] = useState({});
    const {name, status, species, gender, origin, image} = character
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);                   // CAMBIÉ EL ARRAY RESPECTO AL README

    const backToHome = () => {
        navigate('/Home');
    }
  
    
    return(
        <div>
            {character.id ? (
                <div className={styles.div}>
                    <h5>Nombre: {name}</h5>
                    <h5>Status: {status}</h5>
                    <h5>Specie: {species}</h5>
                    <h5>Gender: {gender}</h5>
                    <h5>Origin: {origin?.name}</h5>
                    <img src={`https://rickandmortyapi.com/api/character/avatar/${detailId}.jpeg`} alt={name} />
                </div>
            ) : ( 
                <h1>Loading...</h1>
            )}
            <button onClick={backToHome}>Home</button>
        </div>
    )
}