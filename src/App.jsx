import { useState , React} from 'react';
import './App.css';
import FormClock from './components/form';
import Clock from './components/clock';

function App() {
  const [clock, setClock] = useState([]);

  return (
    <>
      <div className=' flex flex-col relative top-[20%] gap-5'>
        <div className='w-1/2 mx-auto my-0 grid place-items-center'>
          <FormClock
            setClock={setClock}
            clock={clock}
          />
        </div>
        <div className='w-1/2 mx-auto my-0 flex flex-wrap justify-center gap-5'>
          {clock.map((item)=>(
            <Clock 
              name={item.ClockName == undefined ? "no title" : item.ClockName}
              hours={item.Hours == undefined ? 0 : item.Hours}
              minutes={item.Minutes == undefined ? 0 : item.Minutes}
              seconds={item.Seconds == undefined ? 0 : item.Seconds}
            />
          ))}
          
        </div>
      </div>
    </>
  )
}

export default App;
