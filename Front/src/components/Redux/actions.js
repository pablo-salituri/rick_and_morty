import {AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER} from './types';
import axios from 'axios';

export const agregarFavorito = (personaje) => {
    return function(dispatch) {
        axios.post("http://localhost:3001/favs/create", personaje)
        .then(response => {
            return dispatch({
                type: AGREGAR_FAVORITO,
                payload: response.data   
            }) 
        })
    }
}

export const eliminarFavorito = (id) => {
    return function(dispatch) {
        axios.delete("http://localhost:3001/favs/delete/"+id)
        .then(response => {
            return dispatch({
                type: ELIMINAR_FAVORITO,
                payload: response.data
            })
        })
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}