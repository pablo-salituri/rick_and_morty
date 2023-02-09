import SearchBar from "../SearchBar/SearchBar"
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <div className = {styles.div}>
            <SearchBar onSearch = {(characterID) => window.alert(characterID)}/>
        </div>
    )
}