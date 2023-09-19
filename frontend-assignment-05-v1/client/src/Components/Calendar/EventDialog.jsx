// @material-ui/core components
import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FilledInput from "@material-ui/core/FilledInput";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";
import "./Calendar.css";
import { TextField } from "@material-ui/core";
import { Label } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      margin: "10px 0px"
    },
    "& .MuiFormLabel-root": {
      margin: "10px 0px"
    },
    "& .MuiDialog-root": {
      width: "300px"
    }
  }
}));

export const EventDialog = (props) => {
  const {
    eventModal,
    setEventModal,
    event,
    eventTitle,
    setEventTitle,
    radios,
    setRadios,
    eventDescription,
    setEventDescription,
    addNewEvent,
    editEvent,
    isEditModal
  } = props;

  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      open={eventModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setModalAdd(false)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="xl"
    >
      <DialogContent>
        {isEditModal ? <h3>Edit Event</h3> : <h3>Add New Event</h3>}
        <FormGroup>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Event Desctiption"
            type="text"
            variant="outlined"
            multiline
            rows="4"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Box width="100%" display="flex" justifyContent="space-around">
          <Box>
            {isEditModal ? (
              <Button
                color="danger"
                variant="contained"
                onClick={() => editEvent(event)}
              >
                Edit
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={() => addNewEvent}
              >
                Add
              </Button>
            )}
          </Box>
          <Button onClick={()=>setEventModal(false)} >
            Close
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
