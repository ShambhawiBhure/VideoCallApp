import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { formatDate } from '../../../utils/helpers';
import './MeetPageHeader.scss';

const MeetPageHeader = ({
    isChat,
    setIsChat,
    messageAlert,
    setMessageAlert,
}) => {
    let interval = null;
    const [currentTime, setCurrentTime] = useState(() => {
        return formatDate();
    });

    useEffect(() => {
        //automatically update the current time
        interval = setInterval(() => setCurrentTime(formatDate()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="side-header">
                <div className="header">
                    <div className="header-items chat-block"
                        onClick={() => { setIsChat(true); setMessageAlert({}); }} >
                        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                        {!isChat && messageAlert.alert &&
                            (<span className="alert-circle-icon"></span>)}
                    </div>
                    <div className="header-items date-block"> {currentTime}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetPageHeader;