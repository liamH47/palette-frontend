import React, { Component } from 'react';
import ColorTile from './ColorTile'
import '../StyleSheets/Palette.css'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
      }
      changeLevel(level) {
        this.setState({ level });
      }


    

    render() {
        const { colors } = this.props.palette
        const { level } = this.state
        const colorTiles = colors[level].map(color => (<ColorTile background={color.hex} name={color.name} />))
        return (
            <div className='Palette' >
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className='Palette-colors'>
                    {colorTiles}
                </div>
            </div>
        );
    }
}

export default Palette;