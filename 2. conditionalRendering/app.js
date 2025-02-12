import React from 'react'
import UserGreetings from './components/UserGreetings'

export default function App() {
  return (
    <>
    <UserGreetings isLoggedIn={true} username="BroCode"/>
    <UserGreetings isLoggedIn={true} /> 
    </>
  )
}


