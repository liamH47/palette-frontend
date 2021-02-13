import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import Dialog from "@material-ui/core/Dialog";

import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styles from './styles/PaletteListStyles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class PaletteList extends Component {

    state = {
        deleteDialogOpen: false,
        paletteId: ''
    }


    openModal = (id) => {
        this.setState({
            deleteDialogOpen: true,
            paletteId: id
        })
    }
    closeModal = () => {
        this.setState({
            deleteDialogOpen: false,
            paletteId: ''
        })
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }    

    deleteHandler = () => {
        this.props.deletePalette(this.state.paletteId)
        this.closeModal()
    }

    render() {
        const { paletteList, classes, deletePalette } = this.props
        const { deleteDialogOpen, paletteId } = this.state
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
                                handleClick={this.goToPalette}
                                // deleteHandler={deletePalette}
                                id={palette.id}
                                key={palette.id}
                                openModal={this.openModal}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog open={deleteDialogOpen} onClose={this.closeModal}>
                    <DialogTitle id='delete-palette-dialog'>Delete this Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.deleteHandler}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[700]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={this.closeModal}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[700]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);