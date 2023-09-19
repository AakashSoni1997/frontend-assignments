import React, { useState } from "react";
import { CalendarView } from "./Components/Calendar/CalendarView";
import "./App.css"
import AddEventModal from "./AddEventModal";

export default function App() {
  return (
    <div className="main-wrapper">
      <CalendarView />
    </div>
  );
}
