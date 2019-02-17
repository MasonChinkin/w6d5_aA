import React from 'react';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' }

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length === 0) {
      return this.props.words;
    }

    this.props.words.forEach(word => {
      let sub = word.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(word);
      }
    })

    if (matches.length === 0) {
      matches.push('no matches!');
    }

    return matches;
  }

  handleClick(even) {
    let word = event.target.innerText;
    this.setState({ inputVal: word });
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value })
  }

  render() {
    let results = this.matches().map((el, i) => {
      return (
        <li key={i} onClick={this.handleClick}>{el}</li>
      )
    })

    return (
      <div className="auto-widget">
        <h1 className="auto-title">Auto</h1>
        <div className="auto-content">
          <input type="text" className="auto-input" onChange={this.handleInput} value={this.state.inputVal} />
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}