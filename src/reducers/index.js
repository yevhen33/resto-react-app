const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                // menu: state.menu,
                loading: true,
                // error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                // menu: state.menu,
                // loading: true,
                error: true
            };
        case 'ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        default:
            return state;
    }
}

export default reduser;