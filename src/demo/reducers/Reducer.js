/**
 * Created by ruslan on 08.03.17.
 */

import * as types from '../constants/actionTypes'

const initialState = {
    activeMenuItem: ''
};

export default function Reducer(state = initialState, action){
    switch (action.type){

        case types.NAVIGATION:
            return Object.assign({}, state, {
            activeMenuItem: action.name
        });

        default:
            return state;
    }

}