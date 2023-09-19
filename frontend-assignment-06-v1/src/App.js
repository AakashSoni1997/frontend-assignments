import React from 'react'
import FullCalendar from '@fullcalendar/react'
// import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { eventsArray } from './Assets/Event';

export const App = () => {
  const events = [
    { title: 'Meeting', start: new Date() }
  ]
  return (
    <div>
      <FullCalendar
      events={eventsArray}
       plugins={[dayGridPlugin,timeGridPlugin]}
       initialView='dayGridMonth'
       weekends={false}
      headerToolbar={{
        left: "title",
        center: "",
        right: "prev,next today dayGridMonth,timeGridWeek,timeGridDay"
      }}
      //  eventContent={renderEventContent} 
       />
    </div>
  )
}
