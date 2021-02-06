import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
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
        const { paletteIsFull } = this.props
        const { currentColor, newColorName } = this.state
        return (
            <div>
              <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
              <ValidatorForm onSubmit={this.submitHandler} ref='form'>
                 <TextValidator 
                   value={newColorName} 
                   name='newColorName'
                   onChange={this.handleChange}
                   validators={['required', 'isColorNameUnique', 'isColorUnique']}
                   errorMessages={['this field is required', 'color name must be unique', 'color already used']}
                /> 
              <Button 
                variant='contained' 
                color='primary' 
                style={{
                  backgroundColor: paletteIsFull
                    ? "grey"
                    : currentColor
                }}
                type='submit'
                disabled={paletteIsFull}
              > 
                Add Color
                {paletteIsFull ? "Palette Full" : "Add Color"}
              </Button>
              </ValidatorForm>                
            </div>
        );
    }
}

export default ColorPickerForm;