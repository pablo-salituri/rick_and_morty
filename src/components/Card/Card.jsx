import styles from './Card.module.css'
import { Link }  from 'react-router-dom'

export default function Card({name, species, gender, image, id, onClose}) {       // es lo mismo que "props"
   return (
         <div className= {styles.div}>
            <button onClick={onClose}>X</button>
               <section>
                  <Link to={`/detail/${id}`}>
                     <h2>{name}</h2> 
                  </Link>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
               </section>
            <img  src={image} alt="" />
         </div>
   );
}
