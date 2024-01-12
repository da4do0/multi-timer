import {React, useState, useEffect} from "react";

function Clock({name, hours, minutes, seconds, id, setDone}){

    const [CHours, setCHours] = useState();
    const [CMinutes, setCMinutes] = useState();
    const [CSecondes, setCSecondes] = useState();
    const [PlayTimer, setPlayTimer] = useState(true);

    const loadState = () =>{
        setCHours(hours);
        setCMinutes(minutes);
        setCSecondes(seconds);
    }
    useEffect(()=>{
        loadState(); 
    },[])

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if(PlayTimer === false){
                setDone(id);
            }else if(CHours === 0 && CMinutes === 0 && CSecondes === 0){
                setPlayTimer(false);
            }else if(CMinutes === 0 && CSecondes === 0){
                setCHours((CHours)=> CHours-1);
                setCMinutes(59);
                setCSecondes(59);
            }else if(CSecondes === 0){
                setCMinutes((CMinutes)=> CMinutes-1);
                setCSecondes(59);
            }else{
                setCSecondes((CSecondes)=> CSecondes-1);
            }
            
            
          }, 1000);
          return () => {
            clearInterval(timeoutId);
          };
    },[CHours, CMinutes, CSecondes, PlayTimer])
    return(
        <div className="max-w-[40%] overflow-hidden py-10 px-5 rounded-[10px] bg-[#395998]">
            <div className="text-center pb-4 pt-1">
                <span className="bg-[#243962] px-2 py-1 rounded">{name}</span>
            </div>
            <div className="flex justify-center gap-5 text-center bg-[#2f497c] py-4 rounded-[5px]">
                <div className="flex flex-col bg-[#243962] px-4 py-2 rounded">
                    <span>H</span>
                    <span className="bg-slate-800 rounded py-1 px-2">{CHours}</span>
                </div>
                <div>
                    <span>:</span>
                </div>
                <div className="flex flex-col bg-[#243962] px-4 py-2 rounded">
                    <span>M</span>
                    <span className="bg-slate-800 rounded py-1 px-2">{CMinutes}</span>
                </div>
                <div>
                    <span>:</span>
                </div>
                <div className="flex flex-col bg-[#243962] px-4 py-2 rounded">
                    <span>S</span>
                    <span className="bg-slate-800 rounded py-1 px-2">{CSecondes}</span>
                </div>
                
            </div>
        </div>
    )
}
export default Clock;