
import React, { Component } from 'react'

export class Word extends Component {
    render() {
        const { article, wordadded, definition, example, translation } = this.props.word;
        return (
            <div>
                <h1>
                {article}{" "}
                {wordadded}
                </h1>
                <p>
                {definition}</p>
                <p>{example}</p>
                <p>{translation}</p>
            </div>
        )
    }
}

export default Word
