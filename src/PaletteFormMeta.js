import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteFormMeta extends Component {

    state = {
        stage: "form",
        newPaletteName: ""
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
          this.props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          )
        );
    }
    

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClickOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    showEmojiPicker = () => {
        this.setState({ stage: "emoji" })
    }
    savePalette = (emoji) => {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.submitHandler(newPalette)
    }

    render() {
        const { newPaletteName } = this.state;
        const { hideForm, submitHandler} = this.props
        return (
          <div>
            <Dialog open={this.state.stage === 'emoji'} onClose={hideForm}>
              <DialogTitle id='form-dialog-title'>
                Choose an Emoji
              </DialogTitle>
              <Picker 
                title='Choose an Emoji for you Palette' 
                emojiTooltip={true} 
                onSelect={this.savePalette} 
                enableFrequentEmojiSort={true} 
              />
            </Dialog>
            <Dialog
              open={this.state.stage === 'form'}
              onClose={hideForm}
              aria-labelledby='form-dialog-title'
            >
              <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
              <ValidatorForm onSubmit={this.showEmojiPicker}>
                <DialogContent>
                  <DialogContentText>
                    Please enter a name for your new Palette. It must be unique.
                  </DialogContentText>
                <TextValidator
                  label='Palette Name'
                  value={newPaletteName}
                  name='newPaletteName'
                  onChange={this.handleChange}
                  fullWidth
                  margin='normal'
                  validators={["required", "isPaletteNameUnique"]}
                  errorMessages={["Enter Palette Name", "Name already used"]}
                />
                </DialogContent>
                <DialogActions>
                  <Button onClick={hideForm} color='primary'>
                    Cancel
                  </Button>
                  <Button variant='contained' color='primary' type='submit'>
                    Save Palette
                  </Button>
                </DialogActions>
              </ValidatorForm>
            </Dialog>
          </div>
        );
      }
}

export default PaletteFormMeta;