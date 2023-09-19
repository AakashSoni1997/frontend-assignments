import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { eventsArray } from "../../Assets/Data/Events";

import { EventDialog } from "./EventDialog";


import { useStyles } from "./Style";
import { Modal } from "@material-ui/core";
import AddEventModal from "../../AddEventModal";

export const CalendarView = () => {
  const [open, setOpen] = useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  const classes = useStyles();

  const calanderRef = useRef();

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  const [isEditModal, setIsEditModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [radios, setRadios] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    // Use Effect On first Render
    // refill Events with dump Data or Api Call
    setEvents(eventsArray);
  }, []);

  const addNewEvent = () => {
    let newEvents = {
      id: events.length + 1,
      title: eventTitle,
      start: startDate,
      end: endDate,
      allDay: allDay,
      className: radios,
      description: eventDescription
    };
    setEvents([...events, newEvents]);
    setEventModal(false);
    setStartDate(undefined);
    setEndDate(undefined);
    setRadios("bg-info");
    setEventTitle("");
    setEventDescription("");
  };

  const editEvent = (event) => {
    let newEvents = events.map((ev) => {
      if (ev.id.toString() === event.id) {
        console.log("Matche found on ID: ", ev.id);
        event.remove();
        let saveNewEvent = {
          ...ev,
          title: eventTitle,
          className: radios,
          description: eventDescription
        };
        return saveNewEvent;
      } else {
        return ev;
      }
    });
    console.log(newEvents);
    setEvents(newEvents);
    setStartDate(undefined);
    setEndDate(undefined);
    setIsEditModal(false);
    setRadios("bg-info");
    setEventTitle("");
    setEventDescription("");
    setEventModal(false);
  };

  const handleEventClick = (info) => {
    // bind with an arrow function
    console.log(`Event ID: ${info.event.id} Selected!`);
    setEvent(info.event);
    setStartDate(info.event.start);
    setEndDate(info.event.end);
    setEventTitle(info.event.title);
    setIsEditModal(true);
    setEventDescription(info.event.extendedProps.description);
    setRadios(info.event.className);
  };

  const handleDateSelect = (info) => {
    console.log("handleDateSelect");
    setStartDate(info.start);
    setEndDate(info.end);
    setRadios("bg-info");
    setIsEditModal(false);
  };

  const renderEventContent = () => {
    console.log("renderEventContent");
  };

  const handleDateClick = () => {
    console.log("handleDateClick");
  };

  const handleEvents = () => {
    console.log("handleEvents");
  };

  const changeView = (newView) => {
    let calendar = calanderRef.current.getApi();
    calendar.changeView(newView);
    setCurrentDate(calendar.view.title);
  };
  const handleEventAdd=()=>{
    setEventModal(true)
  }

  return (
    <div className={classes.root}>
      <div className={classes.calendar}>
        <header className="header" style={{ textAlign: "right" }}>
          <button onClick={()=>setOpen(true)}>Add Event</button>
        </header>
        <FullCalendar
          ref={calanderRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={5}
          weekends={true}
          initialView="dayGridMonth"
          //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed

          events={events}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          select={handleDateSelect}
          eventsSet={handleEvents}
          eventAdd={function () {
            console.log("Event Added");
          }}
          eventChange={function () {
            console.log("Event Changed");
          }}
          eventRemove={function () {
            console.log("Event Removed");
          }}
          headerToolbar={
            {
              left: "title",
              center: "",
              right: "prev,next today timeGridDay,timeGridWeek,dayGridMonth"
            }
          }
        />
      </div>
      <AddEventModal open={open} handleClose={handleClose} />
    </div>
  );
};
