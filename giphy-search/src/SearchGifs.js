import React, { useState, useEffect } from "react";

const SearchGifs = () => {
  const [query, setQuery] = useState("trending"); //State to store user input
  const [gif, setGif] = useState([]); //GIF array
  const [bonSubmit, setBonsubmit] = useState("trending"); //default state during first render

  const fetchGiphyApi = async (q) => {
    /*
      fetchGiphyApi is async, non blocking function which search and fetched for the GIF based on given attribute
      Parameter: Search token endpoint to make a API call 
      Return: populate the gif state array with 20 data point recevied from the fetch call
    */
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=It4OUakSMICFPMPh8VY8hLkTZKiCzCYD&q=${q}&limit=20`
    );

    const gifDataObj = await data.json();
    console.log(gifDataObj.data);
    setGif(gifDataObj.data);
  };

  useEffect(() => {
    //Effect hook calling the fetch effect side effect
    fetchGiphyApi(query);
  }, [query]);

  const onInputChangeHandler = (e) => {
    //function to  get target event property that returns the element that triggered the onchnage eventn
    setBonsubmit(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(bonSubmit);
  };
  const handleKeyPress = (e) => {
    //Function to capture Enter keypress and calling onsubmit function when keystroke matches.
    if (e.key === "Enter") {
      onSubmitHandler();
    }
  };
  return (
    <>
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

      {/* Calling array map method on gif state array to, mapping over each elment and extracting item.images.title 
    data point and rendering the image.
*/}
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
