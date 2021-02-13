import React, { Component } from 'react';
import seedPalettes from './seedPalettes'
import Palette from './Palette'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

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
  syncLocalStorage(){
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }
  deletePalette = (id) => {
    let newState = this.state.palettes.filter(palette => palette.id !== id)
    this.setState({ palettes: newState }, this.syncLocalStorage)
  }
  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage)
  }
  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route 
                exact 
                path='/palette/new' 
                render={(routeProps) =>( 
                  <div className='transition-wrapper'>
                    <NewPaletteForm 
                      palettes={this.state.palettes} 
                      savePalette={this.savePalette} 
                      {...routeProps} 
                    /> 
                  </div>
                )}
              />
              <Route 
                exact 
                path='/' 
                render={(routeProps) => (
                  <div className='transition-wrapper'>
                    <PaletteList 
                      deletePalette={this.deletePalette} 
                      paletteList={this.state.palettes} 
                      {...routeProps} 
                    /> 
                  </div>
                )} 
              />
              <Route 
                exact 
                path='/palette/:id' 
                render={routeProps => (
                  <div className='transition-wrapper'>
                    <Palette 
                      palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                    />
                  </div>
                )}
              />
              <Route 
                exact 
                path='/palette/:paletteId/:colorId' 
                render={(routeProps) => (
                  <div className='transition-wrapper'>
                    <SingleColorPalette 
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      // <div>
      //   <Palette palette={generatePalette(seedPalettes[4])} />
      // </div>
    );
  }
}

export default App;
