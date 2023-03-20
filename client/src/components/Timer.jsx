import React, { useEffect, useRef, useState } from 'react';

export const Timer = ({initial}) => {
    let seconds=initial;
    const [time,setTime]=useState(seconds);
    let timerId=useRef(null);
    useEffect(()=>{
        if( time > 0){
            let id=setInterval(()=>{
                setTime((prev)=>prev-1);
                timerId.current=id;
            },1000)
        }
        return()=>{
            clearInterval(timerId.current);
        }
    },[time])
  return (
    <>
    <div>
    <h3>
      {(`${Math.floor(time/ 60)}` > 0) ? <span style={{fontSize:"30px"}}>{`${Math.floor(time/60)%60}`}<span style={{color:"green",fontSize:"15px",fontWeight:"lighter"}}>m</span></span> : null }
      <span style={{fontSize:"30px"}}>{`${Math.floor(time%60)}`}<span style={{color:"green",fontSize:"15px",fontWeight:"lighter"}}>s</span></span></h3>
    </div>
    </>
  )
}
