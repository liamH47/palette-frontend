import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends Component(){

    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(e) {
        e.stopPropagation()
        this.props.deletePalette(this.props.id)
    }

    render() {

        const { classes, paletteName, emoji, colors, handleClick } = this.props
        const miniColorBoxes = colors.map(color => (
            <div 
            className={classes.miniColor}
            style={{ backgroundColor: color.color}}
            key={color.name}
            />
            ))
        return (
            <div className={classes.root} onClick={handleClick}>
            <div className={classes.delete}>
                <DeleteIcon 
                  className={classes.deleteIcon} 
                  style={{transition: "all 0.3s ease-in-out"}} 
                  onClick={this.deletePalette}
                  />
            </div>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
            </div>
    )
    }

    
    // class MiniPalette extends Component {
    //     render() {
    //         return (
    //             <div>
                    
    //             </div>
    //         );
    //     }
    // }
    
    // export default MiniPalette;
}
export default withStyles(styles)(MiniPalette)