import styles from './Card.module.css'

export default function Card({name, species, gender, image, onClose}) {       // es lo mismo que "props"
   return (
      <div className= {styles.div}>
         <button onClick={onClose}>X</button>
            <section>
               <h2>{name}</h2> 
               <h2>{species}</h2>
               <h2>{gender}</h2>
            </section>
         <img  src={image} alt="" />
      </div>
   );
}
