import React, { Component } from 'react';
import './App.css';
import List from './List';
import Comics from './Comics';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  render() {
    return (
      <div>
        <div className="store-container">
          <h1>All Comics</h1>
          <List result={Comics().data.results} onSelect={this.handleSelection} />
        </div>
      </div>
    );
  }

  handleSelection(index) {
    this.setState({
      selected: this.state.selected.concat(index)
    });
  }

}

export default App;