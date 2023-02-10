import { useState } from "react";

export default function SearchBar(props) {
   const [personaje, setPersonaje] = useState('')

   const handlePersonaje = (event) => {
      const valor = event.target.value;
      setPersonaje(valor);
   }

   return (
      <div>
         <input type='search' value={personaje} onChange={handlePersonaje} />
         <button onClick={() => props.onSearch(personaje)}>Agregar</button>
      </div>
   );
}
