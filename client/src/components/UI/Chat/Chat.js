import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimesCircle,
    faCommentAlt,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from '../../../utils/helpers';

import './Chat.scss';

const Chat = ({
    setIsChat,
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
        <div className="chat-container">
            <div className="chat-header">
                <div className="tab">
                    <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                    <h5>Meeting Chat</h5>
                </div>
                <FontAwesomeIcon id="cross" className="icon" icon={faTimesCircle}
                    onClick={() => {
                        //close the chat section
                        setIsChat(false);
                    }}
                />
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
            <div className="send-msg-block">
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

export default Chat;