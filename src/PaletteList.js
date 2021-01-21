import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'

class PaletteList extends Component {

    // componentDidMount() {
    //     console.log(this.props)
    //     debugger
    // }

    // renderPalettes() {

    // }
    

    render() {
        const { paletteList } = this.props;
        return (
            <div>
                <MiniPalette />
                <h1>paLit</h1>
                {paletteList.map(palette => (
                    <MiniPalette {...palette}/>
                ))}
            </div>
        );
    }
}

export default PaletteList;