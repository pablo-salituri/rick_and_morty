import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [personaje, setPersonaje] = useState('')

   const handlePersonaje = (event) => {
      const valor = event.target.value;
      setPersonaje(valor);
   }

   return (
      <div className = {styles.SBdiv}>
         <input type='search' value={personaje} onChange={handlePersonaje} />
         <button className = {styles.SBButton} onClick={() => props.onSearch(personaje)}>+</button>
      </div>
   );
}
