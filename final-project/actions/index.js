import axios from "axios";

export const environment = "prod";

const dev = {
  url: "http://localhost:3000",
};

const prod = {
  url: "https://api.themoviedb.org/3",
  // api_key: process.env.API_ENV,
  api_key: "3e44dc9f46451d100ca650a1d9788229",
  language: "en-US",
};

export const getMovieById = (id) => {
    if (environment === "prod") {
      return axios
        .get(
          `${prod.url}/movie/${id}?api_key=${prod.api_key}&language=${prod.language}`
        )
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error("getMovieById", error);
        });
    } else {
      return axios.get(`${dev.url}/api/v1/movies/${id}`).then((res) => {
        return res.data;
      });
    }
  };
  
  export const updateMovie = (movie) => {
    return axios
      .patch(`${dev.url}/api/v1/movies/${movie.id}`, movie)
      .then((res) => {
        return res.data;
      });
  };
  
  export const deleteMovie = (id) => {
    return axios.delete(`${dev.url}/api/v1/movies/${id}`).then((res) => {
      return res.data;
    });
  };