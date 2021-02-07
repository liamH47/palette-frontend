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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormMeta from './PaletteFormMeta'

const drawerWidth = 400;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    }
  },
  button: {
    margin: "0 0.5rem"
  }
})
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
            <PaletteFormMeta palettes={palettes} submitHandler={submitHandler} />
          )}
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);