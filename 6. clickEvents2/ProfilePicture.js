import React from 'react'
import smurf from '../assets/smurf.png';
export default function ProfilePicture() {

    const imageURL = require('../assets/smurf.png');
    const handleClick = () => console.log(`OUCH!`);
    const handleClick2 = (e) => e.target.style.display = "none";


  return (
    <>
        <img onClick={(e) => handleClick(e)} src={imageURL} alt="dp"></img>
        <img onClick={(e) => handleClick2(e)} src={imageURL} alt="dp"></img>
    </>
    );
}
