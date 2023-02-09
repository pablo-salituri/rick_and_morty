//import styles from './Card.module.css'
import Card from "../Card/Card.jsx";

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {
            characters.map(({name, species, gender, image, onClose}) => {
               return <Card 
                  name = {name}
                  species = {species}
                  gender = {gender}
                  image = {image}
                  key = {name}
                  onClose = {() => window.alert('Emulamos que se cierra la card')}
               />
            })   
         }
      </div>     
   );
}
