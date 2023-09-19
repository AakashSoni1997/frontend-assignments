import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textArea: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

const AddEventModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEventTimeChange = (event) => {
    setEventTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <Typography variant="h6">Add Event</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            required 
            label="Title" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={title}
            onChange={handleTitleChange}
          />
          <TextField 
            required 
            type="date" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={date}
            onChange={handleDateChange}
          />
             <TextField 
            required 
            type="date" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={date}
            onChange={handleDateChange}
          />
           <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Event Time</InputLabel>
            <Select
              required
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={eventTime}
              onChange={handleEventTimeChange}
              label="Event Time"
            >
              <MenuItem value="0">High</MenuItem>
              <MenuItem value="1">Medium</MenuItem>
              <MenuItem value="2">Low</MenuItem>
            </Select>
          </FormControl>
          <TextareaAutosize 
            required
            className={classes.textArea}
            rowsMin={4} 
            placeholder="Description" 
            value={description}
            onChange={handleDescriptionChange}
          />
          <Button variant="contained" color="primary" type="submit">Submit</Button>
          <Button variant="contained" onClick={handleClose}>Close</Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEventModal;