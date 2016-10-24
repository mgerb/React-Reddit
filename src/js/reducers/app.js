import * as types from '../actions/constants';

const lightTheme = {
        background: "light",
        module: "light-module",
        font: "light-font",
        altComment: "light-alt-comment"
}

const darkTheme = {
        background: "dark",
        module: "dark-module",
        font: "dark-font",
        altComment: "dark-alt-comment"
}
                
//defaults
const defaultAppState = {
    theme : lightTheme,
    autoLoad : true
}

function initDefaults(){
    let appState = localStorage.getItem('appState');
    
    return appState !== null ? JSON.parse(appState) : defaultAppState;
}

export default function(state = initDefaults(), action) {
    
    let newState;
    switch (action.type) {
        case types.TOGGLE_THEME:
            const theme = state.theme.background === 'light' ? darkTheme : lightTheme;
            newState = Object.assign({}, state, {
                theme: Object.assign({}, state.theme, theme)
            });
            localStorage.setItem('appState', JSON.stringify(newState));
            return newState;
        
        case types.AUTO_LOAD:
            const temp = !state.autoLoad;
            newState = Object.assign({}, state, {
                    autoLoad: temp
                });
            localStorage.setItem('appState', JSON.stringify(newState));
            return newState;
    }

    return state;
}
