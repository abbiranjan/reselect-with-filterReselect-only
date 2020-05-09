export const getUserData = () => dispatch => {
            dispatch({
                type: 'FETCH_DATA'
            })
}

export const findInputItem = (searchTerm) => dispatch => {
    dispatch({
        type: 'FIND_DATA',
        payload:searchTerm
    })
}