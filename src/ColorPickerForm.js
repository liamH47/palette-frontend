import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color'
import DraggableColorList from './DraggableColorList'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from "./PaletteFormNav";

class ColorPickerForm extends Component {

    state = {
        currentColor: "teal",
        newColorName: ""
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.state.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.state.colors.every(({ color }) => color !== this.state.currentColor)
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
    }

    render() {
        const { paletteIsFull } = this.props
        return (
            <div>
              <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor} />
              <ValidatorForm onSubmit={this.submitHandler} ref='form'>
                 <TextValidator 
                   value={this.state.newColorName} 
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
                    : this.state.currentColor
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