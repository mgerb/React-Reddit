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
const defaults = {
    theme : lightTheme
}

function initDefaults(){
    const theme = localStorage.getItem('theme');
    
    if(theme !== null){
        defaults.theme = JSON.parse(theme);
    }
    return defaults;
}

export default function(state = initDefaults(), action) {
    switch (action.type) {
        case types.TOGGLE_THEME:
            const theme = state.theme.background === 'light' ? darkTheme : lightTheme;
            localStorage.setItem('theme', JSON.stringify(theme));
            
            return Object.assign({}, state, {
                theme: Object.assign({}, state.theme, theme)
            });
    }

    return state;
}
