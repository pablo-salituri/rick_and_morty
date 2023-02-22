//import React from 'react'
//import styles from './Favorites.module.css'
//import { connect } from 'react-redux'
//import { MapStateToProps } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './Favorites.module.css'
//import { useDispatch } from "react-redux";
import { orderCards, filterCards} from '../Redux/actions'

/* class Favorites extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                {
                    this.props.myFavorites.map(function(elem) {
                        return (
                            <div>
                                <button onClick={elem.onClose}>X</button>
                                    <section>
                                       <Link to={`/detail/${elem.id}`}>
                                         <h2>{elem.name}</h2> 
                                        </Link>
                                        <h2>{elem.species}</h2>
                                        <h2>{elem.gender}</h2>
                                     </section>
                                     <img  src={elem.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        ) 
    }
} */

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <div className = {styles.opciones}>
                <select name="Order" id="Order" onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option> 
                    <option value="Descendente">Descendente</option> 
                </select>

                <select name="Filter" id="Filter" onChange={handleFilter}>
                    <option value="Mostrar Todos">Mostrar Todos</option> 
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option> 
                    <option value="Genderless">Genderless</option> 
                    <option value="unknown">Unknown</option> 
                </select>
            </div>
            <div className = {styles.cartasFav}>
            {
                myFavorites.map(function(elem, index) {
                    return (
                        <div key={index}>
                            {/* <button onClick={elem.onClose}>X</button> */}
                            <section className = {styles.cartaFav}>
                                <img className = {styles.imgFav} src={elem.image} alt="" />   
                                <Link to={`/detail/${elem.id}`}>
                                    <h2>{elem.name}</h2> 
                                </Link>
                                <h2>{elem.species}</h2>
                                <h2>{elem.gender}</h2>
                            </section>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Favorites;

