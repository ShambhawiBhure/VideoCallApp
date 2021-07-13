import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faMicrophone,
    faDesktop,
    faMicrophoneSlash,
    faVideoSlash,
    faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";

import './MeetPageHeader1.scss';

const MeetPageHeader1 = ({
    isSharing,
    stopScreenShare,
    screenShare,
    isAudio,
    AudioOnOff,
    isVideo,
    VideoOnOff,
    disconnectCall,
}) => {
    return (
        <div className="header-item">
            <div className="control-items">
                <div className={`icon-block ${isVideo ? "bg" : null}`}
                    onClick={() => VideoOnOff(!isVideo)}
                >
                    <FontAwesomeIcon className="icon" icon={isVideo ? faVideo : faVideoSlash} />
                </div>
                <div className={`icon-block ${isAudio ? "bg" : null}`}
                    onClick={() => AudioOnOff(!isAudio)}
                >
                    <FontAwesomeIcon className="icon" icon={isAudio ? faMicrophone : faMicrophoneSlash} />
                </div>
                {isSharing ? (
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

export default MeetPageHeader1;