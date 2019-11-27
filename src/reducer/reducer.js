const initialState = {
    Access_Token: '',
    id: '',
    userData: null,
    products: []
};

const reducer = (state = initialState, action) => {
    // if (action.type === 'ADD_Access_Token') {
    //     return {
    //         ...state,
    //         Access_Token: action.payload.access_token,
    //         id: action.payload.id
    //     };
    // }
    // if (action.type === 'ADD_USER_DATA') {
    //     return {
    //         ...state,
    //         userData: action.payload
    //     };
    // }
    // if (action.type === 'ADD_PRODUCTS') {
    //     return {
    //         ...state,
    //         products: action.payload
    //     };
    // }
    // return state;


    switch (action.type) {
        case 'ADD_Access_Token': {
            return {
                ...state,
                Access_Token: action.payload.access_token,
                id: action.payload.id
            };
        }
        case 'ADD_USER_DATA': {
            return {
                ...state,
                userData: action.payload
            };
        }
        case 'ADD_PRODUCTS': {
            return {
                ...state,
                products: action.payload
            };
        }
        default:
            return state;
    }
};

export default reducer;