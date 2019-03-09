import * as actions from "./actions";
import { apiKey } from "../config.json";

describe("actions", () => {
  it("Checking action", async () => {
    const url =
      "https://api.giphy.com/v1/gifs/" +
      "search?q=" +
      "something" +
      "&api_key=" +
      apiKey +
      "&limit=2";
    var result = await actions.getGifsBySearchQuery(url);
    expect(typeof result).toEqual("object");
    expect(result.type).toEqual("GET_GIFS_BY_QUERY");
    expect(Array.isArray(result.gifs)).toEqual(true);
  });
});
