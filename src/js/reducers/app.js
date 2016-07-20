import * as types from '../actions/constants';


//defaults
const defaultAppState = {
    theme: {
        background: "light",
        module: "light-module",
        font: "light-font",
        altComment: "light-alt-comment"
    }
}

export default function(state = defaultAppState, action) {
    switch (action.type) {
        case types.TOGGLE_THEME:

            let altComment, background, module, font;

            if (state.theme.background == "light") {
                background = "dark";
                module = "dark-module";
                font = "dark-font";
                altComment = "dark-alt-comment";
            } else {
                background = "light";
                module = "light-module";
                font = "light-font";
                altComment = "light-alt-comment";
            }
            return Object.assign({}, state, {
                theme: Object.assign({}, state.theme, {
                    background: background,
                    module: module,
                    font: font,
                    altComment: altComment
                })
            });
    }

    return state;
}
