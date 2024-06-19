import Card from './Cards';
import React, { useEffect, useState } from 'react';

function CardsContainer() {

    const currentDate = new Date().toLocaleDateString()
    const[currenttime,setCurrenttime] =useState(new Date())
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrenttime(new Date())
        },1000);
        return ()=> clearInterval(interval)    
    },[])
    return (
        <div className='flex  justify-between gap-1 my-3 flex-wrap '>
            <Card bg={"#8272da"} title={"28 Celcious"} subtitle={"Laval"} ></Card>
            <Card bg={"#4bc487"} title={currentDate} subtitle={currenttime.toLocaleTimeString()}></Card>
            <Card bg={"#588ff5"} title={"Build Using"} subtitle={"React"}></Card>

        </div> 
    )
}
export default CardsContainer