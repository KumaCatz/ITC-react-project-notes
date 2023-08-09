export const notesReducerActions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  SORT_BY_DATE: 'SORT_BY_DATE',
  FETCH_STORAGE: 'FETCH_STORAGE'
}

export function notesReducer(state, action) {
  let result

  switch (action.type) {
    case notesReducerActions.ADD_ITEM:
      result = [action.data, ...state]
      break
    case notesReducerActions.DELETE_ITEM:
      result = [...state].filter((item) => item !== action.data)
      break
    case notesReducerActions.SORT_BY_DATE:
      result = [...state].sort((a, b) => a.date - b.date)
      break
    case notesReducerActions.FETCH_STORAGE:
      result = JSON.parse(localStorage.getItem('notes'))
      //something about this is returning me a broken array. i mean it works, but not for the sort function, at least
      break
    default:
      throw new Error()
  }
  localStorage.setItem('notes', JSON.stringify(result));
  return result
}