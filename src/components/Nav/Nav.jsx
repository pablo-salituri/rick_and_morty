import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'


export default function Nav(props) {
    return (
        <div className = {styles.div}>
            <SearchBar onSearch = {props.onSearch}/* {(characterID) => window.alert(characterID)} *//>
            <Link to="/Home">
                <span>Home</span>
            </Link>
            <Link to="About">
                <span>About</span>
            </Link>
        </div>
    )
}