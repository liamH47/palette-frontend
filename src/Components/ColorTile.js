import React, { Component } from 'react';
import '../StyleSheets/ColorTile.css'

class ColorTile extends Component {
    render() {
        const {name, background } = this.props
        return (
            <div style={{ background: this.props.background }} className='Color-Tile'>
                <div className='copy-btn-container'>
                    <div className='tile-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-btn'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        );
    }
}

export default ColorTile;