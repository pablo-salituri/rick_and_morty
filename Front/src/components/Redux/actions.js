import {AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER} from './types';
import axios from 'axios';

export const agregarFavorito = (personaje) => {
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.post("http://localhost:3001/favs/create", personaje)
            return dispatch({
                type: AGREGAR_FAVORITO,
                payload: respuestaDelBack.data   
            }) 
        }
        catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
        finally {
            console.log('Addfavorite gestionado');
        }
    }
}


// *Agregar favoritos con promesas

/* export const agregarFavorito = (personaje) => {
    return function(dispatch) {
        axios.post("http://localhost:3001/favs/create", personaje)
        .then(response => {
            return dispatch({
                type: AGREGAR_FAVORITO,
                payload: response.data   
            }) 
        })
    }
} */


export const eliminarFavorito = (id) => {
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.delete("http://localhost:3001/favs/delete/"+id)
            return dispatch({
                type: ELIMINAR_FAVORITO,
                payload: respuestaDelBack.data
            })
        } 
     
        catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
        finally {
            console.log('Removefavorite gestionado');
        }
    }
}


// *Eliminar favoritos con promesas

/* export const eliminarFavorito = (id) => {
    return function(dispatch) {
        axios.delete("http://localhost:3001/favs/delete/"+id)
        .then(response => {
            return dispatch({
                type: ELIMINAR_FAVORITO,
                payload: response.data
            })
        })
    }
} */


export const getFavoritos = () => {
    return async function(dispatch) {
        try {
            const respuestaDelBack = await axios.get("http://localhost:3001/favs/get/");
            return dispatch({
                type: 'GET_FAVORITO',
                payload: respuestaDelBack.data
            })
        } 
        catch (error) {
            return dispatch({type: 'ERROR', payload: error})
        }
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