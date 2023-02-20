import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {        // action = {type, payload}
    switch(type) {
        case AGREGAR_FAVORITO:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            };
        case ELIMINAR_FAVORITO:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(function(elem) {
                    return elem.id !== payload
                })
            };
        case FILTER:
            const filtro = state.allCharacters.filter(function(elem) {
                return elem.gender === payload
            })
            return {
                ...state,
                myFavorites: filtro    
            };
        case ORDER:
            return {
                ...state,
                myFavorites: 
                    payload === 'Ascendente'
                    ? state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)                
            }
        default:
            return {...state};
    }
}

export default reducer