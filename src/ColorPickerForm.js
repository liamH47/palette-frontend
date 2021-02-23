import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    // padding: "1rem",
    // marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px"
  },
  container: {
    width: "100%"
  },
}
class ColorPickerForm extends Component {

    state = {
        currentColor: "teal",
        newColorName: ""
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
        this.props.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
          this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex})
    }
    submitHandler = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor)
        this.setState({ newColorName: ""})
    }

    render() {
        const { paletteIsFull, classes } = this.props
        const { currentColor, newColorName } = this.state
        return (
            <div className={classes.container}>
              <div style={{backgroundColor: currentColor}}>
              </div>
              <ChromePicker 
                color={currentColor} 
                onChangeComplete={this.updateCurrentColor} 
                className={classes.picker}
              />
              <ValidatorForm onSubmit={this.submitHandler} ref='form' instantValidate={false}>
                 <TextValidator 
                   value={newColorName} 
                   placeholder='Color Name'
                   className={classes.colorNameInput}
                   margin='normal'
                   name='newColorName'
                   variant='filled'
                   onChange={this.handleChange}
                   validators={['required', 'isColorNameUnique', 'isColorUnique']}
                   errorMessages={['this field is required', 'color name must be unique', 'color already used']}
                /> 
              <Button 
                variant='contained' 
                color='primary' 
                style={{
                  backgroundColor: paletteIsFull ? "grey" : currentColor
                }}
                type='submit'
                className={classes.addColor}
                disabled={paletteIsFull}
              > 
                
                {paletteIsFull ? "Palette Full" : "Add Color"}
              </Button>
              </ValidatorForm>                
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);