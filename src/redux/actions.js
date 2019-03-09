import axios from "axios";

export async function getGifsBySearchQuery(url) {
  return axios
    .get(url)
    .then(({ data }) => {
      return {
        type: "GET_GIFS_BY_QUERY",
        gifs: data && data.data,
        error: false
      };
    })
    .catch(err => {
      return {
        type: "GET_GIFS_BY_QUERY",
        error: true
      };
    });
}
