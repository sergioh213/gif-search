export default function(state = {}, action) {
    if (action.type === "GET_GIFS_BY_QUERY") {
      state = {
        ...state,
        gifs: action.gifs,
        error: action.error
      };
    }
    return state;
  }
  