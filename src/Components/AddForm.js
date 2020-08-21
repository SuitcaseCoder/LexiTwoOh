import React, { Component } from "react";

// I still actually have to add the handle submit form to do something... probably call a post request to add to the api

export class AddForm extends Component {
  // I think state goes in here
  // isFem: true/false, isNeut: true/false, isMasc: true/false -- change background color based on this

  state = {
    //   maybe change this to array of words: [{id:}] word: { }
    // id: "",
    article: "",
    wordadded: "",
    definition: "",
    example: "",
    translation: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("yo, this form was submitted ");
    this.props.addWord(this.state.article,this.state.wordadded,this.state.definition,this.state.example,this.state.translation);
    // this.setState({ article: "" }); // this clears the input back out, which I don't know if I want
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="article"
          placeholder="der,die,das,..."
          value={this.state.article}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="wordadded"
          placeholder="das neue Wort..."
          value={this.state.wordadded}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="definition"
          placeholder="was es bedeutet..."
          value={this.state.definition}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="example"
          placeholder="Ein Beispiel..."
          value={this.state.example}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="translation"
          placeholder="in deiner Sprache..."
          value={this.state.translation}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddForm;
