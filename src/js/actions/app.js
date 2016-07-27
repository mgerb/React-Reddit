import * as types from './constants';

export function toggleTheme() {
    return {
        type: types.TOGGLE_THEME
    }
}

export function toggleAutoLoad(){
    return {
        type: types.AUTO_LOAD
    }
}