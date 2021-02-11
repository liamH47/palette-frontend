import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteListStyles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class PaletteList extends Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }    

    render() {
        const { paletteList, classes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>paLit</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {paletteList.map(palette => (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                                <MiniPalette 
                                {...palette} 
                                handleClick={() => this.goToPalette(palette.id)}
                                deleteHandler={deletePalette}
                                id={palette.id}
                                key={palette.id}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);