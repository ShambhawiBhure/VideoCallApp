import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from "react-share";

import './MeetingNow.scss';

const MeetingInfo = ({ setmeetNowPopup, url }) => {
    return (
        <div className="meeting-now-block">
            <div className="block-header">
                <h4>Meeting Now!!</h4>
                <FontAwesomeIcon className="icon" icon={faTimesCircle} onClick={() => {
                    //close the meeting info popup
                    setmeetNowPopup(false);
                }}
                />
            </div>

            <p className="text">
                Share the meeting link with others
            </p>

            <div className="meet-link">
                <div>{url}</div>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => {
                    //copy the url
                    navigator.clipboard.writeText(url)
                }}
                />
            </div>

            {/* sharing the meeting link over social media to increase user engagement */}
            <div className="share-social">
                <p className="text">Send an invite through :</p>
                <WhatsappShareButton
                    url={url}
                    title={`Join this meeting with the given code \n`}
                    separator="Link: "
                    className="share-icon">
                    <WhatsappIcon size={26} round />
                </WhatsappShareButton>

                <FacebookMessengerShareButton
                    url={url}
                    title={`Join this meeting with the given code \n`}
                    separator="Link: "
                    className="share-icon">
                    <FacebookMessengerIcon size={26} round />
                </FacebookMessengerShareButton>
            </div>
        </div>
    )
}

export default MeetingInfo;