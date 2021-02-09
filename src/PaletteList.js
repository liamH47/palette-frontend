import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteListStyles'


// const styles = {
//     root: {
//         backgroundColor: "blue",
//         height: "100%",
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "center"
//     }, 
//     container: {
//         width: "50%",
//         display: "flex",
//         alignItems: "flex-start",
//         flexDirection: "column",
//         flexWrap: "wrap"
//     },
//     nav: {
//         display: "flex",
//         width: "100%",
//         justifyContent: "space-between",
//         color: "white"
//     },
//     palettes: {
//         boxSizing: "border-box",
//         width: "100%",
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 30%)",
//         gridGap: "5%"
//     }
// }

class PaletteList extends Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }    

    render() {
        const { paletteList, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>paLit</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {paletteList.map(palette => (
                            <MiniPalette 
                                {...palette} 
                                handleClick={() => this.goToPalette(palette.id)}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);