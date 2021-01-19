import React, { Component } from 'react';
import seedPalettes from './Components/seedPalettes'
import Palette from './Components/Palette'

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={seedPalettes[4]} />
      </div>
    );
  }
}

export default App;
