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
        navigate(-1);
    }
  
    
    return(
        <div>
            {character.id ? (
                <div className = {styles.divDetail}>
                    <img className = {styles.imgDetail} src={image} alt={name} />
                    <h5 className = {styles.h5Detail} >Nombre: {name}</h5>
                    <h5 className = {styles.h5Detail} >Status: {status}</h5>
                    <h5 className = {styles.h5Detail} >Specie: {species}</h5>
                    <h5 className = {styles.h5Detail} >Gender: {gender}</h5>
                    <h5 className = {styles.h5Detail} >Origin: {origin?.name}</h5>
                </div>
            ) : ( 
                <h1>Loading...</h1>
            )}
            <button onClick={backToHome}>Volver</button>
        </div>
    )
}