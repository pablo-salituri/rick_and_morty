import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
}

const reducer = (state = initialState, {type, payload}) => {        // action = {type, payload}
    switch(type) {
        case AGREGAR_FAVORITO:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: {}
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
                }),
                errors: {}
            };
        case 'GET_FAVORITO':
            return {
                ...state,
                myFavorites: payload,
                errors: {}
            }
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
        case "ERROR":
            return {
                ...state,
                errors: payload
            }
        default:
            return {...state};
    }
}

export default reducer