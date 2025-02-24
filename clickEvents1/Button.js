import React from 'react'

export default function Button() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         alert(`Enough ${name} its ${count} times STOP!`)
    //     }
    // };

    // const handleClick2 = (name) => {
    //     alert(`Stop Clicking me ${name}`);
    // }

    const handleClick = (e) => {
            e.target.textContent = "OUCH!";
    }
  
    return (
    <>
      <button onClick={(e)=> handleClick(e)}>Click Me!</button>
    </>
  )
}
