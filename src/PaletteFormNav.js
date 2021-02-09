import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormMeta from './PaletteFormMeta'
import styles from './styles/PaletteFormNavStyles'
class PaletteFormNav extends Component {

    state = {
        newPaletteName: "",
        formShowing: false
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    showForm = () => {
      this.setState({ formShowing: true })
    }
    hideForm = () => {
      this.setState({ formShowing: false })
    }

    render() {
        const { classes, open, palettes, submitHandler } = this.props
        const { newPaletteName } = this.state
        return (
          <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            color='default'
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.props.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' color='inherit' noWrap>
                Create a New Palette
              </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
              {/* <PaletteFormMeta palettes={palettes} handleSubmit={handleSubmit}/> */}
              <Link to='/'>
              <Button 
                variant='contained' 
                color='secondary'
                className={classes.button}
              >

                {/* <Button variant='contained' color='secondary'> */}
                  Go Back
                </Button>
              </Link>
              <Button
                variant='contained'
                color='primary'
                onClick={this.showForm}
                className={classes.button}
              >           
                Save
              </Button>
            </div>
          </AppBar>
          {this.state.formShowing && (
            <PaletteFormMeta palettes={palettes} hideForm={this.hideForm} submitHandler={submitHandler} />
          )}
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);