import React, { useState, useEffect } from "react";
// const giphy = require("giphy-api")("It4OUakSMICFPMPh8VY8hLkTZKiCzCYD");

const SearchGifs = () => {
  const [query, setQuery] = useState("trending");
  const [gif, setGif] = useState([]);
  const [bonSubmit, setBonsubmit] = useState("trending");
  const [history, setHistory] = useState([]);

  const fetchGiphyApi = async (q) => {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=It4OUakSMICFPMPh8VY8hLkTZKiCzCYD&q=${q}&limit=20`
    );

    const gifDataObj = await data.json();
    console.log(gifDataObj.data);
    setGif(gifDataObj.data);
    setHistory(bonSubmit, ...history);
  };

  useEffect(() => {
    fetchGiphyApi(query);
  }, [query]);

  //   const searchedGifs = (e) => {
  //     e.preventDefault();
  //     console.log(query);
  //     // fetchGiphyApi(query);
  //   };

  //   const onInputChangeHanle = (e) => {
  //     setQuery(e.target.value);
  //   };
  const onInputChangeHandler = (e) => {
    setBonsubmit(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(bonSubmit);
    setQuery(bonSubmit);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitHandler();
    }
  };
  return (
    <>
      {/* <form className="form">
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Search Gif"
          onChange={onInputChangeHanle}
        />
        <button type="submit" className="button" onSubmit={searchedGifs}>
          Search
        </button>
      </form> */}
      <form className="form">
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          name="gif"
          id="gif"
          className="input"
          value={bonSubmit}
          onChange={onInputChangeHandler}
        />
        <button
          type="submit"
          className="button"
          onKeyPress={handleKeyPress}
          onClick={onSubmitHandler}
        >
          search
        </button>
      </form>
      {/* <div className="history-container">
        <h2 className="history-title"> History </h2>
        {history.map((item) => (
          <ul>
            <li>item</li>
          </ul>
        ))}
      </div> */}

      <div className="card-list container">
        {gif.map((item) => (
          <div className="card" key={item.id}>
            <img
              className="card--image"
              alt={item.images.title}
              width="50%"
              height="50%"
              src={item.images.preview_gif.url}
              onClick={(e) => {
                window.location = item.url;
              }}
            />
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default SearchGifs;
