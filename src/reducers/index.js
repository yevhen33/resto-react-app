const initialState = {
    menu: []
}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.playload
            };
        default:
            return state;
    }
}

export default reduser;