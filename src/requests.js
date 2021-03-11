const ApiKey = "6e95317a9ed8c60f15d871f8336e1a36";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchActionMovie: `discover/movie?api_key=${ApiKey}&with_genres=28`,
  fetchComedyMovie: `discover/movie?api_key=${ApiKey}&with_genres=35`,
  fetchHorrorMovie: `discover/movie?api_key=${ApiKey}&with_genres=27`,
  fetchRomanceMovie: `discover/movie?api_key=${ApiKey}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${ApiKey}&with_genres=99`,
};

export default requests;
