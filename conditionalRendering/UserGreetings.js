import React from 'react'
import PropTypes from 'prop-types'

export default function UserGreetings(props) {


    const welcomeMsg =      <h2 className='welcome-msg'>
                            Welcome {props.username}</h2>
    const loginPrompt =     <h2 className='login-prompt'>
                            Please LogIn</h2>
    
    if(props.isLoggedIn) {
        return welcomeMsg;
    }
    else{
        return loginPrompt;
    }

//   return (props.isLoggedIn ? welcomeMsg : loginPrompt);
}

    UserGreetings.prototypes = {
        isLoggedIn : PropTypes.bool,
        username : PropTypes.string,
    }

    UserGreetings.defaultProps = {
        isLoggedIn: false,
        username: "Guest",
    }