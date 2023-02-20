import styles from './Cards.module.css'
import Card from "../Card/Card.jsx";


export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={styles.divCards}>
         {
            characters.map((elemento) => {
            return <Card 
                  name = {elemento.name}
                  species = {elemento.species}
                  gender = {elemento.gender}
                  image = {elemento.image}
                  key = {elemento.id}
                  onClose = {() => onClose(elemento.id)}
                  id = {elemento.id}
               />
            })   
         }
      </div>     
   );
}
