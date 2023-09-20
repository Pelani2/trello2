export const SET_IS_LENGTH_VALID = 'SET_IS_LENGTH_VALID';
export const SET_HAS_SPECIAL_CHARACTER = 'SET_HAS_SPECIAL_CHARACTER';

export const setIsLengthValid = (isLengthValid) => ({
    type: SET_IS_LENGTH_VALID,
    payload: isLengthValid,
});

export const setHasSpecialCharacter = (hasSpecialCharacter) => ({
    type: SET_HAS_SPECIAL_CHARACTER,
    payload: hasSpecialCharacter,
});