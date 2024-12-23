const initialState = {
    cars: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_CARS" :
            return {...state ,cars : action.payload}

        case "ADD_CAR" :
            return {...state ,cars: [...state.cars, action.payload]}

        case "UPDATE_CAR" :
            return {...state, cars: state.cars.map( c => c.id === action.payload.id ? action.payload: c)}
            
        case "DELETE_CAR":
            return {...state, cars: state.cars.filter(c => c.id !== action.payload) }
        
        default:
            return state
    }
}

export default reducer;