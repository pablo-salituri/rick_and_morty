import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO } from "./types";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, {type, payload}) => {        // action = {type, payload}
    switch(type) {
        case AGREGAR_FAVORITO:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            };
        case ELIMINAR_FAVORITO:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(function(elem) {
                    return elem.id !== payload
                })
            };
        default:
            return {...state};
    }
}

export default reducer