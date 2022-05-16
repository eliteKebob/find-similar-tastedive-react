export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, searchResults: "", loading: true, error: "" }
    case "FETCH_SUCCESS":
      return { ...state, searchResults: action.payload, loading: false }
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false }
    case "STATE_CLEAR":
      return { ...state, searchResults: "", loading: false, error: "" }
    default:
      return state
  }
}
