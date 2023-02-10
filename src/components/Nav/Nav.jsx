import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import styles from './Nav.module.css'

export default function Nav(props) {
    return (
        <div className = {styles.div}>
            <SearchBar onSearch = {props.onSearch}/* {(characterID) => window.alert(characterID)} *//>
        </div>
    )
}