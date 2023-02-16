//import React from 'react'
//import styles from './Favorites.module.css'
//import { connect } from 'react-redux'
//import { MapStateToProps } from 'react-redux'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    return(
        <div>
            {
                myFavorites.map(function(elem) {
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

export default Favorites;

/* const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites); */