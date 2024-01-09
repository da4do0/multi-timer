import { useEffect, useState } from "react";


function FormClock({setClock, clock}){
    const [newClock, setNewClock] = useState({});

    const updateClock = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setNewClock({...newClock, [name]: value})
    }
    /* console.log(Object.values(clock)[2]) */
    
    const newSetClock = (e)=>{
        e.preventDefault();
        if(!('Seconds' in newClock) && !('Minutes' in newClock) && !('Hours' in newClock) && !('ClockName' in newClock)){
            alert("ciao");
        }else{
            const realClock = {
                'ClockName': newClock.ClockName,
                'Hours': newClock.Hours,
                'Minutes': newClock.Minutes,
                'Seconds': newClock.Seconds,
            }

            setClock([...clock, newClock])
        }
    }

    /* useEffect(() =>{
        console.log(clock);
    }) */
    return(
        <>
            <form onSubmit={newSetClock} className=" w-[60%] bg-[#395998] rounded-[10px] p-5">
                <div className="flex flex-col items-center">
                    <label htmlFor="ClockName">Clock's Name</label>
                    <input
                        type="text" 
                        name="ClockName" 
                        id="ClockName" 
                        onChange={updateClock}
                        className=" w-1/2 text-center bg-[#243962] rounded-[5px]"
                    />
                </div>

                {/* input time */}
                <div className="flex">
                    <div className=" flex flex-col items-center">
                        <label htmlFor="Hours" className="text-center w-full block">H</label>
                        <input 
                            type="number" 
                            name="Hours" 
                            id="Hours"
                            min="0"
                            defaultValue="0"
                            onChange={updateClock}
                            className=" w-[80%] text-center bg-[#243962] rounded-[5px]"
                            />
                    </div>
                    <div className=" flex flex-col items-center">
                        <label htmlFor="Minutes" className="text-center w-full block">M</label>
                        <input 
                            type="number" 
                            name="Minutes" 
                            id="Minutes"
                            min="0" 
                            defaultValue="0"
                            onChange={updateClock}
                            className=" w-[80%] text-center bg-[#243962] rounded-[5px]"
                        />
                    </div>
                    <div className=" flex flex-col items-center">
                        <label htmlFor="Seconds" className="text-center w-full block">S</label>
                        <input 
                            type="number" 
                            name="Seconds" 
                            id="Seconds"
                            min="0" 
                            defaultValue="0"
                            onChange={updateClock}
                            className=" w-[80%] text-center bg-[#243962] rounded-[5px]"
                        />
                    </div>
                </div>

                <div className="w-full grid place-items-center pt-5">
                    <button type="submit" className="bg-[#243962] py-1 px-4 rounded-[5px] ">New Timer</button>
                </div>
                
            </form>
        </>
    )
}

export default FormClock;