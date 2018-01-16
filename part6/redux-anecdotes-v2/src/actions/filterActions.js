export const CHANGE_FILTER = 'CHANGE_FILTER'
export const CLEAR_FILTER = 'CHANGE_FILTER'

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter,
  }
}

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  }
}
