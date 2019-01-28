import React, { Component } from 'react'
import TableMovieCoversContainers from '../containers/TableMovieCovers/TableMovieCoversContainers' // изменили импорт

class App extends Component {
    render() {
      return (
        <div className="App">
          <TableMovieCoversContainers />
        </div>
      );
    }
  }

  export default App