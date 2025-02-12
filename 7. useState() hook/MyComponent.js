import React, {useState} from 'react'

export default function MyComponent() {
    const [name, setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const[status, setStatus] = useState(false);
    const updateName = ()=> {
        setName("Kishant");
    }

    const updateAge = () => {
        setAge(age+1);
    }
    
    const toggleStatus = () => {
        setStatus(!status);
    }
  
    return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Increment Age</button>
      <p>Employed Status: {status ? "Yes": "No"}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </>
  )
}
