import reducer from "./reducers";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it("should handle GET_GIFS_BY_QUERY", () => {
    const gifs = [
      {
        id: "dwefsrd",
        images: { fixed_height: { url: "/" } }
      },
      {
        id: "dwefsdrsrd",
        images: { fixed_height: { url: "/" } }
      }
    ];
    expect(
      reducer([], {
        type: "GET_GIFS_BY_QUERY",
        gifs: gifs
      })
    ).toEqual({
      gifs: gifs,
      error: undefined
    });
  });
});
