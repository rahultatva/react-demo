// Initial state for user reducer
const createInitialState = {
    usersList: [],
    loader: true
};

//Handle reducers
export const userReducer = (state = createInitialState, action) => {
    switch (action.type) {
        case "FETCH_USERS":
            return {
                ...state
            };
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                usersList: action.payload,
                loader: false
            };
        case "FETCH_USERS_FAIL":
            return {
                ...state,
                usersList: [],
                loader: false
            };
        default :
            return {
                ...state
            }
    }
}