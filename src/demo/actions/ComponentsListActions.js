/**
 * Created by ruslan on 13.03.17.
 */

import * as types from '../constants/actionTypes'

export function ActionNavigation(name) {
    // min === 0 / max === Colors.length
    return {
        type: types.NAVIGATION,
        name: name
    }
}