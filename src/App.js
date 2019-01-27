import React, { Component } from 'react';

import TableMovieCovers from './containers/TableMovieCovers/TableMovieCovers';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';


class App extends Component {
  render() {
    return (
      <div className="App">

        <TableMovieCovers />
      </div>
    );
  }
}

export default App;
