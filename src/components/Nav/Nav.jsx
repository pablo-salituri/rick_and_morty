import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'


export default function Nav(props) {
    return (
        <div className = {styles.divNav}>
            <Link to="/Home" className = {styles.linkNav}>
                <span>Home</span>
            </Link>
            <SearchBar onSearch = {props.onSearch}/* {(characterID) => window.alert(characterID)} *//>
            <Link to="About" className = {styles.linkNav}>
                <span>About</span>
            </Link>
            <Link to="favorites" className = {styles.linkNav}>
                <span>Favorites</span>
            </Link>
        </div>
    )
}