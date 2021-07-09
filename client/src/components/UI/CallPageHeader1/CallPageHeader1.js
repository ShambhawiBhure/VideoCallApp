import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faMicrophone,
    faDesktop,
    faMicrophoneSlash,
    faVideoSlash,
    faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";

import './CallPageHeader1.scss';

const CallPageHeader1 = ({
    isPresenting,
    stopScreenShare,
    screenShare,
    isAudio,
    toggleAudio,
    isVideo,
    toggleVideo,
    disconnectCall,
}) => {
    return (
        <div className="footer-item">
            <div className="center-item">
                <div className={`icon-block ${isVideo ? "bg" : null}`}
                    onClick={() => toggleVideo(!isVideo)}
                >
                    <FontAwesomeIcon className="icon" icon={isVideo ? faVideo : faVideoSlash} />
                </div>
                <div className={`icon-block ${isAudio ? "bg" : null}`}
                    onClick={() => toggleAudio(!isAudio)}
                >
                    <FontAwesomeIcon className="icon" icon={isAudio ? faMicrophone : faMicrophoneSlash} />
                </div>
                {isPresenting ? (
                    <div className="icon-block" onClick={stopScreenShare}>
                        <FontAwesomeIcon className="icon" icon={faDesktop} />
                    </div>
                ) : (
                    <div className="icon-block" onClick={screenShare}>
                        <FontAwesomeIcon className="icon" icon={faDesktop} />
                    </div>
                )}

                <div className="icon-block red" onClick={disconnectCall}>
                    <FontAwesomeIcon className="icon" icon={faPhoneSlash} />
                </div>
            </div>
        </div>
    )
}

export default CallPageHeader1;