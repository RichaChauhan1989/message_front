import React, {useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";

function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")

    function usernameHandler(e)
        {
            setUsername(e.target.value)
        }

    function passwordHandler(e)
        {
            setPassword(e.target.value)
        }

    function login() {
        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseURL + '/auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setLoginStatus("Login Success")
            })
            .catch((error) => {
                console.log(error);
                setLoginStatus("Username or Password is wrong")
            });

    }

    return (
        <div>
            <h1>Login page</h1>
            <p>Username <input id={"username"} type={'text'} onChange={usernameHandler}/></p>
            <p>Password <input id={"password"} type={'password'} onChange={passwordHandler}/></p>
            <p>
                <button id={"login"} onClick={login}>Login</button>
            </p>
            <p id={'login_status'}>{loginStatus}</p>
        </div>
    );
}

export default Login;