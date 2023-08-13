import Form from './Components/Form';
import ClockList from './Components/Clock/ClockList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useState } from 'react';


function App() {
  const [clocks, setClocks] = useState([]);

  const onSubmit = (name, timeZone) => {
      const clock = {
          id: uuidv4(),
          name: name,
          timeZone: timeZone,
      }
      setClocks(prevItems => [...prevItems, clock]);
  }

  const deleteClock = (id) => {
      setClocks(clocks.filter(clock => clock.id !== id))
  }

  return (
      <div className="container">
        <Form onSubmit={onSubmit}/>
        <ClockList clocks={clocks} onDelete={deleteClock}/>
      </div>
  );
}

export default App;
