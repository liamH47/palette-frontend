import React, { Component } from 'react';
import seedPalettes from './seedPalettes'
import Palette from './Palette'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'

const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
class App extends Component {
  

  state = {
    palettes: savedPalettes || seedPalettes 
  }

  findPalette = (id) => {
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }
  deletePalette = (id) => {
    this.setState({ palettes: this.state.palettes.filter(palette => palette.id !== id) },
      this.syncLocalStorage)
    
  }
  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage)
  }
  syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }
  render() {
    return (
      <Switch>
        <Route exact path='/palette/new' render={(routeProps) => <NewPaletteForm palettes={this.state.palettes} savePalette={this.savePalette} {...routeProps} />}/>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />} />
        <Route exact path='/palette/:id' render={routeProps => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
        )}/>
        <Route exact path='/palette/:paletteId/:colorId' render={(routeProps) => (
          <SingleColorPalette 
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              this.findPalette(routeProps.match.params.paletteId)
            )}
            />
        )}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalettes[4])} />
      // </div>
    );
  }
}

export default App;
