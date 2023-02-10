//import styles from './Card.module.css'
import Card from "../Card/Card.jsx";

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div>
         {
            characters.map((elemento) => {
            return <Card 
                  name = {elemento.name}
                  species = {elemento.species}
                  gender = {elemento.gender}
                  image = {elemento.image}
                  key = {elemento.id}
                  onClose = {() => onClose(elemento.id)}
               />
            })   
         }
      </div>     
   );
}
