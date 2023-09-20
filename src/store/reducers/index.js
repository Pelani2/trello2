import { SET_IS_LENGTH_VALID, SET_HAS_SPECIAL_CHARACTER } from "../actions";

const initialState = {
    isLengthValid: false,
    hasSpecialCharacter: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_LENGTH_VALID:
            return {
                ...state,
                isLengthValid: action.payload,
            };
        case SET_HAS_SPECIAL_CHARACTER: 
            return {
                ...state,
                hasSpecialCharacter: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;