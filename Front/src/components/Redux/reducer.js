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
                myFavorites: payload,
                allCharacters: payload
            };
        case ELIMINAR_FAVORITO:
            return {
                ...state,
                /* myFavorites: state.myFavorites.filter(function(elem) {
                    return elem.id !== payload
                }), */
                myFavorites: payload,
                allCharacters: state.allCharacters.filter(function(elem) {
                    return elem.id !== payload
                })
            };
        case FILTER:
            return {
                ...state,
                myFavorites:
                    payload === 'Mostrar Todos'
                    ? [...state.allCharacters]
                    : state.allCharacters.filter(function(elem) {
                        return elem.gender === payload
                    })
            }
/*             const filtro = state.allCharacters.filter(function(elem) {
                return elem.gender === payload
            })
            return {
                ...state,
                myFavorites: filtro    
            }; */
        case ORDER:
            return {
                ...state,
                myFavorites: 
                    payload === 'Ascendente'
                    ? state.myFavorites.sort((a,b) => a.id - b.id)
                    : state.myFavorites.sort((a,b) => b.id - a.id)                
            }
        default:
            return {...state};
    }
}

export default reducer