export const fetchCarAction = (cars) => {
    return {type: 'FETCH_CARS', payload: cars}
}

export const addCarAction = (car) => {
    return { type: "ADD_CAR", payload: car}
}

export const updateCarAction = (car) => {
    return { type: "UPDATE_CAR", payload: car}
}

export const deleteCarAction = (id) => {
    return { type: "DELETE_CAR", payload: id}
}