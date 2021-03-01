const initialState = {
  trending: [],
  netflixOriginals: [],
  topRated: [],
  action: [],
  horror: [],
  comedy: [],
  romance: [],
  documentaries: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        trending: action.payload.trending,
        netflixOriginals: action.payload.netflixOriginals,
        topRated: action.payload.topRated,
        action: action.payload.action,
        horror: action.payload.horror,
        comedy: action.payload.comedy,
        romance: action.payload.romance,
        documentaries: action.payload.documentaries,
      };
    default:
      return {
        ...state,
      };
  }
};
export default movieReducer;
