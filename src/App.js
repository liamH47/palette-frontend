import React, { Component } from 'react';
import seedPalettes from './Components/seedPalettes'
import Palette from './Components/Palette'
import { generatePalette } from './ColorHelpers'

class App extends Component {
  render() {
    console.log(generatePalette(seedPalettes[4]));
    return (
      <div>
        <Palette palette={generatePalette(seedPalettes[4])} />
      </div>
    );
  }
}

export default App;
