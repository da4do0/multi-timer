import { useState , React, useEffect} from 'react';
import './App.css';
import FormClock from './components/form';
import Clock from './components/clock';

function App() {
  const [clock, setClock] = useState([]);
  const [deadTimer, setDeadTimer] = useState([]);
  const [IDTimer, setIDTimer] = useState([]);

  const setDone = (id)=>{
    const modID = [...IDTimer].find((obj => obj.IDClock === id));
    const newIDTimer = [...IDTimer];
    newIDTimer[modID.IDClock].done = true;
    setIDTimer(newIDTimer);
  }

  const newDeadTimer = (id)=>{
    const tempDeadTimer = [...clock].filter(obg => obg.IdClock != id);    
    setClock([...clock].filter(obg => obg.IdClock != id));
    setDeadTimer([...deadTimer, tempDeadTimer]);

  }

  useEffect(()=>{
    console.log(deadTimer);
  },[clock])

  return (
    <>
      <div className=' flex flex-col relative top-[20%] gap-5'>
        <div className='w-1/2 mx-auto my-0 grid place-items-center'>
          <FormClock
            setIDTimer={setIDTimer}
            IDTimerApp={IDTimer}
            setClock={setClock}
            clock={clock}
          />
        </div>
        <div className='w-1/2 mx-auto my-0 flex flex-wrap justify-center gap-5'>
          {clock.map((item)=>(
            <Clock 
              key={item.IdClock}
              id={item.IdClock}
              name={item.ClockName}
              hours={item.Hours}
              minutes={parseInt(item.Minutes, 10)}
              seconds={item.Seconds}
              setDone={setDone}
              deadTimer={newDeadTimer}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
