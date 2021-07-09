import './Support.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash, faMicrophoneSlash, faDesktop, faCopy, faComment, faPhoneSlash, faClock, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const Support = () => {
    return (
        <>
            <div class="skills">
                <div class="container">
                    <div class="text">
                        <h2>Need Help??</h2>
                        <p>The Complete Guide</p>
                    </div>

                    <div class="skill-card">
                        <div class="card">
                            <i><FontAwesomeIcon icon={faVideo} /></i>
                            <h4>New Meeting</h4>
                            <p>The <strong>New Meeting</strong> button on the home page
                                creates an unique meeting with an unique URL.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faCopy} /></i>
                            <h4>Copy Meeting Link</h4>
                            <p>The meeting initializer(admin) gets an option to copy the
                                meeting link so as to share it with the other person.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faMicrophoneSlash} /></i>
                            <h4>Toggle Audio</h4>
                            <p>Meeting participants can turn their audio ON and OFF.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faVideoSlash} /></i>
                            <h4>Toggle Video</h4>
                            <p>Meeting participants can turn their video ON and OFF.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faDesktop} /></i>
                            <h4>Screen Share</h4>
                            <p>Meeting participants can share a live video of a single 
                                browser tab or the entire desktop.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faClock} /></i>
                            <h4>Live Time</h4>
                            <p>Call page will always show live time in the top right corner.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faComment} /></i>
                            <h4>Meeting Chat</h4>
                            <p>Meeting participants can have live chat while in the meeting.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faExclamationCircle} /></i>
                            <h4>Message Alert</h4>
                            <p>Whenever the other participant sends a new message, a message
                                alert will appear on user's callpage.</p>
                        </div>

                        <div class="card">
                            <i><FontAwesomeIcon icon={faPhoneSlash} /></i>
                            <h4>Leave the meet</h4>
                            <p>At any point of time, any participant can leave the meeting!</p>
                        </div>
                    </div>
                    <a className="up" href="/">Start a new meeting now?!</a>
                </div>
            </div>
        </>
    )
}

export default Support;