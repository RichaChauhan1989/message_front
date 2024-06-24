import React, {useEffect, useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";


function ChatRoom(props) {
    const [chatrooms, setChatrooms] = useState([])

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseURL + 'chat/chatroom/',
            headers: {}
        };

        axios.request(config)
            .then(response => {
                console.log(JSON.stringify(response.data));
                setChatrooms(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    //const [chatrooms, setChatRooms] = useState()
    return <div>
        <h1>ChatRoom</h1>
        <ul>
            {chatrooms.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>;
}

export default ChatRoom;