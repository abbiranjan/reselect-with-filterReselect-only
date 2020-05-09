import { createSelector } from 'reselect';

export const filteredDataSelector = createSelector(
    (state) => state.userData.items,
    (state) => state.userData.searchTerm,
    (data, userTerm) => {
        return data.filter(data => data.title.match(new RegExp(userTerm, 'i')))
    }
)