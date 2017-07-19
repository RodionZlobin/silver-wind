//import './Login.scss'
//import './login2.css'

import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import React from "react";

export default class Login extends React.Component {

    //state user
    //state password


    render() {
        return <div className="login">
            <h1>Login</h1>
            <form action="/service">
                <input type="text" name="u" placeholder="Username" required="required"/>
                <input type="password" name="p" placeholder="Password" required="required"/>

                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>

            </form>
        </div>
        /*
        Here is another version = 1 of login
         <div class="login-page">
         <div class="form">
         <form class="login-form">
         <input type="text" placeholder="username" required="required"/>
         <input type="password" placeholder="password" required="required"/>
         <button>login</button>
         </form>
         </div>
         </div>
         */
    }
}