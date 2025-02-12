import React, {useState} from 'react'

export default function UpdateObject() {
    const[car, setCar] = useState({year:2017, 
                                   make:"Ford", 
                                   model:"Mustang"});
    
    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
        //we used "c" because -> to indicate we are working with previous state of car
    }
    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }
  return (
    <>
     <p>Your favourite car is: {car.year} {car.make} {car.model}</p> 
     <input type="number" value={car.year} onChange={handleYearChange}/><br />
     <input type="text" value={car.make} onChange={handleMakeChange}/><br />
     <input type="text" value={car.model} onChange={handleModelChange}/><br />
    </>
  )
}
