const initialState = {
  term: '',
  location: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return {
        ...state,
        term: action.term,
      }
    default:
      return state
  }
}

export default reducer
