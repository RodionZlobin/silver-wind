//import './Login.scss'
//import './login2.css'

//import { Link } from 'react-router-dom'
//import { Route } from 'react-router-dom'

//import mongoose from 'mongoose';
//import '../Models/User';

import React from "react";


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",//React.PropTypes.string,
            password: "",//React.PropTypes.string,
            attempt: 1,

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        if(this.state.userName === "1" && this.state.password === "2"){
            window.location.assign("/service");
        }
        else
        {
            this.setState({userName: "", password: "", attempt: this.state.attempt + 1});
        }

        /*
        mongoose.connect('mongodb://localhost:27017/mydb');
        const Schema = mongoose.Schema;

        const UserSchema = new Schema({
            userName     : { type: String },
            password     : { type: String }
        });

        const User = mongoose.model('User', UserSchema);
        //User.find();

        const user = new User({
            userName: "rodion",
            password: "123,"
        });

        user.save();
        */

    }

    handleUserNameInput(event){
        this.setState({userName: event.target.value});
    }

    handlePasswordInput(event){
        this.setState({password: event.target.value});
    }


    render() {
        return <div className="login">
            <h1 className="s-color">Login</h1>
            <span>Attempt {this.state.attempt}</span>

            <form onSubmit={this.handleClick}>
                <input type="text" value={this.state.userName} placeholder="Username" required="required" onChange={this.handleUserNameInput}/>
                <input type="password" value={this.state.password} placeholder="Password" required="required" onChange={this.handlePasswordInput}/>

                <button type="submit" className="btn btn-primary btn-block btn-large" >Let me in.</button>

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
