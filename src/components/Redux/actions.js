import {AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER} from './types';

export const agregarFavorito = (personaje) => {
    return {
        type: AGREGAR_FAVORITO,
        payload: personaje   
    }
}

export const eliminarFavorito = (id) => {
    return {
        type: ELIMINAR_FAVORITO,
        payload: id
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