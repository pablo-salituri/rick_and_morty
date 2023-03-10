import styles from './Card.module.css'
import { Link }  from 'react-router-dom'
import {agregarFavorito, eliminarFavorito} from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux' //agregado por daiana
import { useState, useEffect } from 'react'
import style from './Card.module.css'

export default function Card({name, species, gender, image, id, onClose/* , agregarFavorito, eliminarFavorito */}) {       // es lo mismo que "props"

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(eliminarFavorito(id))
      }
      else {
         setIsFav(true);
         dispatch(agregarFavorito({name, species, gender, image, id, onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
         <div className= {styles.div}>
            
            {
               isFav ? (
                  <button className = {style.butFavCard} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className = {style.butFavCard} onClick={handleFavorite}>🤍</button>
               )
            }

            <button className = {style.butCloseCard} onClick={onClose}>X</button>
            <Link className = {style.linkCard} to={`/detail/${id}`}>
               <section>
                  <h2 className = {style.h2Card}>{name}</h2> 
                  <h2 className = {style.h2Card}>{species}</h2>
                  <h2 className = {style.h2Card}>{gender}</h2>
               </section>
            </Link>
            <img className = {style.imgCard} src={image} alt="" />
         </div>
   );
}


/* const mapDispatchToProps = (dispatch) => {
   return {
      agregarFavorito: (personaje) => dispatch(agregarFavorito(personaje)),
      eliminarFavorito: (id) => dispatch(eliminarFavorito(id))
   }
}

export default connect(null, mapDispatchToProps)(Card) */
