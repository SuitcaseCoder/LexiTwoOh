import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Header from "./Header";
import AddForm from "./AddForm";
import WordItem from "./WordItem";

class Words extends Component {
  state = {
    words: [],
  };

  addWord = (article, wordadded, definition, example, translation) => {
    console.log(
      "printing from words.js: " + article,
      wordadded,
      definition,
      example,
      translation
    );
    // this is not actually adding the words to the state, I don't think so
    //   ok jk this is a fkn game changing thing happening right here
    this.setState({
      words: [
        ...this.state.words,
        {
          article: article,
          wordadded: wordadded,
          definition: definition,
          example: example,
          translation: translation,
        },
      ],
    });
    console.log(this.state.words);
  };

  render() {
    return (
        <div>
          <Header />
          <AddForm addWord={this.addWord}/>
          <WordItem words={this.state.words}/>
        </div>
    )
    ;

  }
}

// Words.propTypes = {

// };

export default Words;
