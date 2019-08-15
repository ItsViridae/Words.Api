import React, { Component } from 'react'
import apiService from '../apiService/apiService'
import API_ENDPOINTS from '../endpoints/endpoints'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class AddButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            wordToAdd: ''
        }
    }

    handleClickOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        })
    }

    handleAdd = () => {
        this.handleClose()
        this.makePostRequestForNewWord()
    }

    handleChange = (event) => {
        this.setState({
            wordToAdd: event.target.value
        })
    }

    makePostRequestForNewWord = () => {
        apiService.post(API_ENDPOINTS.postWord, this.state.wordToAdd)
            .then((response) => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Add A New Word
                </Button>
                <Dialog open={this.state.isOpen} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create Word</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="word"
                            label="Word"
                            type="text"
                            fullWidth
                            onChange={(event) => this.handleChange(event)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAdd} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}