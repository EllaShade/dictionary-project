import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="Meaning">
      <h3>{capitalizeFirstLetter(props.meaning.partOfSpeech)}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition:</strong> {definition.definition}
            </div>
            <div className="example">
              <strong>Example:</strong> {definition.example}
            </div>
          </div>
        );
      })}
      <div className="synonyms">
        <strong>Synonyms:</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
