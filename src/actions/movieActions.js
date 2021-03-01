import axios from "axios";
import { trendingUrl, netflixOriginalsUrl, actionMoviesUrl,topRatedUrl,comedyMoviesUrl,horrorMoviesUrl,romanceMoviesUrl,documentariesUrl} from "../api";

export const fetchMovies = () => async (dispatch) => {
  const trendingData = await axios.get(trendingUrl());
  const netflixOriginalsData = await axios.get(netflixOriginalsUrl());
  const topRatedData=await axios.get(topRatedUrl());
  const actionMoviesData=await axios.get(actionMoviesUrl());
  const comedyMoviesData=await axios.get(comedyMoviesUrl());
  const horrorMoviesData=await axios.get(horrorMoviesUrl());
  const romanceMoviesData=await axios.get(romanceMoviesUrl());
  const documentariesData=await axios.get(documentariesUrl());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      trending: trendingData.data.results,
      netflixOriginals: netflixOriginalsData.data.results,
      topRated:topRatedData.data.results,
      action:actionMoviesData.data.results,
      horror:horrorMoviesData.data.results,
      comedy:comedyMoviesData.data.results,
      romance:romanceMoviesData.data.results,
      documentaries:documentariesData.data.results

    },
  });
};
