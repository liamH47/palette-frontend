import React, { Component } from 'react';
import ColorTile from './ColorTile'
import '../StyleSheets/Palette.css'

class Palette extends Component {

    // componentDidMount() {
    //     console.log(this.props.palette);
    //     debugger
    // }
    

    render() {
        const colorTiles = this.props.palette.colors.map(color => (<ColorTile background={color.color} name={color.name} />))
        return (
            <div className='Palette' >
                <div className='Palette-colors'>
                    {colorTiles}
                </div>
            </div>
        );
    }
}

export default Palette;