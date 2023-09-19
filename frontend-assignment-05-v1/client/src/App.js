import React  ,{useEffect} from "react"
import './App.css';
import axios from "axios"
// import { Home } from './components/home/Home';
// import EventForm from './components/eventForm/EventForm';

function App() {
  useEffect(() => {
    axios.get("/api/calendar/get-events").then((res)=>console.log(res.data))
  }, [])

  
  return (
    <div className="App">
      <Home />
      {/* <DemoApp /> */}
      <EventForm />
    </div>
  );
}

export default App;
