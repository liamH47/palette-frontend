import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                {paletteList.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        );
    }
}

export default PaletteList;