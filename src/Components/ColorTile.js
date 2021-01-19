import React, { Component } from 'react';
import '../StyleSheets/ColorTile.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ColorTile extends Component {

    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    state = {
        copied: false
    }
    changeCopyState(){
        this.setState({ copied: true}, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const {name, background } = this.props
        const { copied } = this.state
        return (
                <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                    <div style={{ background: this.props.background }} className='Color-Tile'>
                        <div style={{ background: this.props.background }}  className={`copy-overlay ${copied && 'show'}`}></div>
                        <div className={`copy-msg ${copied && 'show'}`}>
                            <h1>Copied to Clipboard!</h1>
                            <p>{this.props.background}</p>
                        </div>
                        <div className='copy-btn-container'>
                            <div className='tile-content'>
                                <span>{name}</span>
                            </div>
                                <button className='copy-btn'>Copy</button>
                        </div>
                        <span className='see-more'>More</span>
                    </div>
                </CopyToClipboard>
        );
    }
}

export default ColorTile;