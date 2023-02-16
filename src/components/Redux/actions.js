import {AGREGAR_FAVORITO, ELIMINAR_FAVORITO} from './types';

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