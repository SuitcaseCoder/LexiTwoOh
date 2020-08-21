import React, { Component } from "react";
import uuid from "uuid";
import Word from "./Word";

export class WordItem extends Component {
  render() {
    //   console.log('printing the state of words in the wordItem ' + this.props.words);
    // const { article } = this.props.words;
    return (
        this.props.words.map((word) => (
            <Word
            key={uuid}
              word={word}
            />
          )));
  }
}

export default WordItem;
