import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes,
    faComment,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from '../../../utils/helpers';

import './Messenger.scss';

const Messenger = ({
    setIsMessenger,
    sendMsg,
    messageList
}) => {
    //by default, it will be an empty msg
    const [msg, setMsg] = useState("");

    const handleChangeMsg = (e) => {
        setMsg(e.target.value);
    };

    const handleKeyDown = (e) => {
        //"Enter" key on keyboard will also allow to send the msg
        if (e.key === "Enter") {
            sendMsg(msg);
            //once msg is sent, again change it to default empty msg
            setMsg("");
        }
    };

    const handleSendMsg = () => {
        sendMsg(msg);
        setMsg("");
    };

    return (
        <div className="messenger-container">
            <div className="messenger-header">
                <h3>Meeting Details</h3>
                <FontAwesomeIcon className="icon" icon={faTimes}
                    onClick={() => {
                        //close the chat section
                        setIsMessenger(false);
                    }}
                />
            </div>
            <div className="message-header-tabs">
                <div className="tab active">
                    <FontAwesomeIcon className="icon" icon={faComment} />
                    <p>Meeting Chat</p>
                </div>
            </div>

            <div className="chat-section">
                {messageList.map((item) => (    //iterate through the message list
                    //unique key
                    <div key={item.time} className="chat-block">
                        <div className="sender">
                            {item.user} <small>{formatDate(item.time)}</small>
                        </div>
                        <p className="msg">{item.msg}</p>
                    </div>
                ))}

            </div>
            <div className="send-msg-section">
                <input placeholder="Type a new message"
                    value={msg}
                    onChange={(e) => handleChangeMsg(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <FontAwesomeIcon className="icon" icon={faPaperPlane}
                    onClick={handleSendMsg} />
            </div>
        </div>
    )
}

export default Messenger;