//feature
export const SCHOOL = '[SCHOOL]';

//types
export const FETCH_SCHOOL = `${SCHOOL} FETCH`;
export const SET_SCHOOL = `${SCHOOL} SET`;
export const CLEAR_SCHOOL = `${SCHOOL} CLEAR`;

//creators
export const fetchSchool = () => ({
    type: FETCH_SCHOOL,
});
export const setSchool = data => ({
    type: SET_SCHOOL,
    payload: data,
});
export const clearSchool = () => ({
    type: CLEAR_SCHOOL,
});

