import React from 'react'
import Student from './components/Student'

export default function App() {
  return (
    <>
    <Student name="Spongebob" age="30" isStudent={true} />
    <Student name="Patrik" age={42} isStudent={false}/>
    <Student name="Squidward" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student />
    </>
  )
}

