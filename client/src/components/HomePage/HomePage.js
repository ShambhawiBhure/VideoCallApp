import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import shortid from "shortid";
import Header from '../UI/Header/Header';
import Support from '../Support/Support';
import './HomePage.scss';

const HomePage = () => {
    const history = useHistory();

    const startCall = () => {
        //generate new unique call id
        const uid = shortid.generate();
        //redirect to call page
        //#admin is a differentiator, meaning he/she started the meeting
        history.push(`/${uid}#admin`);
    }

    const joinCall = () => {
        //get the link that a user entered
        var url = document.getElementById("meetlink").value
        //retrieve the id from the link
        url = url.split("/");
        //redirect to the call page
        history.push(`/${url[url.length - 1]}`);
    }

    return (
        <>
        <Header />
            <div className="home-page">
                <div className="body">
                    <div className="left-side">
                        <div className="content">
                            <h2>Welcome to</h2>
                            <h1>MICROSOFT TEAMS</h1>
                            <h2>Meet, chat, call, and collaborate in just on place </h2>
                            <div className="action-btn">
                                <button className="btn blue" onClick={startCall}>
                                    <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                    New Meeting
                                </button>
                                <div className="input-block">
                                    <div className="input-section">
                                        <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                        <input id="meetlink" placeholder="Enter the meeting link" />
                                    </div>
                                    <p className="join" onClick={joinCall}>
                                        Join now
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        {/* https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWD1Ul?ver=90f6&q=90&h=1300&w=1600&b=%23FFFFFFFF&aim=true */}
                        <img src="https://statics.teams.microsoft.com/hashedassets-launcher/launcher_meetings_new2.9fa71945172e1585663594bc17a4a301.svg"></img>
                        
                    </div>
                </div>
            </div>

            <div id="support">
                <Support />
            </div>
        </>

    );
}

export default HomePage;