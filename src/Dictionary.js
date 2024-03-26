import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
import { InfinitySpin } from "react-loader-spinner";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you searching for?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              autoFocus={true}
              placeholder="Type here..."
              defaultValue={props.defaultKeyword}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </form>
          <div className="hint">suggested words: sunset, wine, night...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return (
      <div>
        <InfinitySpin
          visible={true}
          width="200"
          color="#6c584c"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }
}
