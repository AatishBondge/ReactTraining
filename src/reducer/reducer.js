const initialState = {
    Access_Token: '',
    id: '',
    userData: null
};

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_Access_Token') {
        return {
            ...state,
            Access_Token: action.payload.access_token,
            id: action.payload.id
        };
    }
    if (action.type === 'ADD_USER_DATA') {
        return {
            ...state,
            userData: action.payload
        };
    }

    return state;
};

export default reducer;