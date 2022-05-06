import * as api from '../../api';
import { SET_CARS } from "../types";

export const carAction = {
    addCar: (name, model, sku, price) => async (dispatch) => {
        api.addCar({
                name: name,
                model: model,
                sku: sku,
                price: price
            })
            .then((result) => {
                const { data } = result;
                if (data.success) dispatch({
                    type: SET_CARS,
                    payload: data.cars
                });
            }).catch(err => console.log(err));
    },

    carList: () => async (dispatch) => {
        api.carList()
            .then((result) => {
                const { data } = result;
                if(data.success) dispatch({ type: SET_CARS, payload: data.cars });
            }).catch(err => console.log(err));
    },

    deleteCar: (id) => async (dispatch) => {
        api.deleteCar(id)
            .then((result) => {
                const { data } = result;
                if(data.success) dispatch({ type: SET_CARS, payload: data.cars });
            }).catch(err => console.log(err));
    },
};