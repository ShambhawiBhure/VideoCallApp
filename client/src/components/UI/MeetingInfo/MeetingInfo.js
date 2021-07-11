import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from "react-share";

import './MeetingInfo.scss';

const MeetingInfo = ({ setMeetInfoPopup, url }) => {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h4>Meeting Now!!</h4>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
                    //close the meeting info popup
                    setMeetInfoPopup(false);
                }}
                />
            </div>

            <p className="info-text">
                Share the meeting link with others
            </p>
            
            <div className="meet-link">
                <span>{url}</span>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => {
                    //copy the url
                    navigator.clipboard.writeText(url)
                }}
                />
            </div>
            <div className="share_social">
                <p className="info-text">Share directly on :</p>
                <WhatsappShareButton
                    url={url}
                    title={`Join this meeting with the given code \n`}
                    separator="Link: "
                    className="share_icon">
                    <WhatsappIcon size={26} round />
                </WhatsappShareButton>

                <FacebookMessengerShareButton
                    url={url}
                    title={`Join this meeting with the given code \n`}
                    separator="Link: "
                    className="share_icon">
                    <FacebookMessengerIcon size={26} round />
                </FacebookMessengerShareButton>
            </div>
        </div>
    )
}

export default MeetingInfo;