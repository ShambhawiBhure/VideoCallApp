import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import './CallPageHeader.scss';
import { useState, useEffect } from "react";
import { formatDate } from './../../../utils/helpers';

const CallPageHeader = ({
    isMessenger,
    setIsMessenger,
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
            <div className="frame-header">
                <div className="optionheader">
                    <div className="header-items icon-block"
                        onClick={() => { setIsMessenger(true); setMessageAlert({}); }} >
                        <FontAwesomeIcon className="icon" icon={faComment} />
                        {!isMessenger && messageAlert.alert &&
                            (<span className="alert-circle-icon"></span>)} </div>
                    <div className="header-items date-block"> {currentTime}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallPageHeader;