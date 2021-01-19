import React, { Component } from 'react';
import '../StyleSheets/ColorTile.css'

class ColorTile extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className='Color-Tile'>
                <span>{this.props.name}</span>
                <span>more</span>
            </div>
        );
    }
}

export default ColorTile;