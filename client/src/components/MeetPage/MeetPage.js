import { useEffect, useReducer, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getRequest, postRequest } from '../../utils/apiRequests';
import { BASE_URL, GET_CALL_ID, SAVE_CALL_ID, GET_ICE_SERVER } from '../../utils/apiEndpoints';
import io from "socket.io-client";
import MeetPageHeader1 from '../UI/MeetPageHeader1/MeetPageHeader1';
import MeetingNow from '../UI/MeetingNow/MeetingNow';
import MeetPageHeader from '../UI/MeetPageHeader/MeetPageHeader';
import Chat from '../UI/Chat/Chat';
import MessageListReducer from '../../reducers/MessageListReducer';
import Peer from 'simple-peer';
import Alert from "../UI/Alert/Alert";

import './MeetPage.scss';

let peer = null;
const socket = io.connect(process.env.REACT_APP_BASE_URL);
const initialState = [];

const MeetPage = () => {
    const history = useHistory();
    let { id } = useParams();
    const isAdmin = window.location.hash === "#admin" ? true : false;
    //following line of code will give the url without #admin 
    const url = `${window.location.origin}${window.location.pathname}`;
    let alertTimeout = null;

    const [messageList, messageListReducer] = useReducer(
        MessageListReducer,
        initialState
    );

    const iceServers = useRef([]);

    const [streamObj, setStreamObj] = useState();
    const [screenCastStream, setScreenCastStream] = useState();
    const [meetNowPopup, setmeetNowPopup] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [isChat, setIsChat] = useState(false);
    const [messageAlert, setMessageAlert] = useState({});
    const [isAudio, setIsAudio] = useState(true);
    const [isVideo, setIsVideo] = useState(true);

    useEffect(() => {
        //meeting info popup should be accesible only by the admin
        if (isAdmin) {
            setmeetNowPopup(true);
            getICServer();
        }
        else {
            initWebRTC();
        }
        socket.on("code", (data) => {
            if (data.url === url) {
                peer.signal(data.code);
            }
        });
    }, []);

    const getICServer = async () => {
        const response = await getRequest(`${BASE_URL}${GET_ICE_SERVER}`);
        iceServers.current = response;
        initWebRTC();
    }

    const getReceiverCode = async () => {
        const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
        if (response.code) {
            peer.signal(response.code);
        }
    };

    const initWebRTC = () => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        })
            .then((stream) => {
                setStreamObj(stream); //now this stream is available inside state

                let myVideo = document.getElementById("myVideo");

                if ("srcObject" in myVideo) {
                    myVideo.srcObject = stream;
                } else {
                    myVideo.src = window.URL.createObjectURL(stream); // for older browsers
                }
                myVideo.className = "video-container";
                myVideo.muted = true;
                myVideo.play();

                stream.getAudioTracks()[0].enabled = false;
                setIsAudio(false);
                stream.getVideoTracks()[0].enabled = false;
                setIsVideo(false);

                if (isAdmin && iceServers.current && iceServers.current.length) {
                    peer = new Peer({
                        initiator: isAdmin,
                        trickle: false,
                        stream: stream,
                        config: {
                            iceServers: iceServers.current
                        }
                    });
                }

                if (!isAdmin) {
                    peer = new Peer({
                        initiator: false,
                        trickle: false,
                        stream: stream,
                    });
                    getReceiverCode();
                }

                peer.on("signal", async (data) => {
                    if (isAdmin) {
                        console.log("data", data);
                        let payload = {
                            id,
                            signalData: data,
                        };
                        //when we get payload, we have to store the data in redis
                        await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
                    }
                    else {
                        //socket event
                        socket.emit("code", { code: data, url }, (cbData) => {
                            console.log("code sent");
                        });
                    }
                });
                //connect peer
                peer.on("connect", () => {
                    console.log('peer connected');
                    // wait for 'connect' event before using the data channel
                });

                peer.on("data", (data) => {
                    clearTimeout(alertTimeout);
                    messageListReducer({
                        type: "addMessage",
                        payload: {
                            user: "Other",
                            msg: data.toString(),
                            time: Date.now(),
                        },
                    });

                    setMessageAlert({
                        alert: true,
                        isPopup: true,
                        payload: {
                            user: "Other",
                            msg: data.toString(),
                        },
                    });

                    //the alert will vanish after 10seconds
                    alertTimeout = setTimeout(() => {
                        setMessageAlert({
                            ...messageAlert,
                            isPopup: false,
                            payload: {},
                        });
                    }, 10000);
                });

                peer.on("stream", (stream) => {
                    myVideo.classList.remove("video-cotainer");
                    myVideo.className = "video-container2";
                    // got remote video stream, now let's show it in a video tag
                    let video = document.querySelectorAll("video")[1];

                    if ("srcObject" in video) {
                        video.srcObject = stream;
                    }
                    else {
                        video.src = window.URL.createObjectURL(stream);   // for older browsers
                    }
                    video.play();
                });
            })
            .catch((ex) => {
                console.log(ex.message);
            })
    };

    const sendMsg = (msg) => {
        peer.send(msg);
        messageListReducer({
            type: "addMessage",
            payload: {
                user: "You",
                msg: msg,
                time: Date.now(),
            },
        });
    };

    const screenShare = () => {
        navigator.mediaDevices
            .getDisplayMedia({ cursor: true })
            .then((screenStream) => {
                peer.replaceTrack(
                    streamObj.getVideoTracks()[0],
                    screenStream.getVideoTracks()[0],
                    streamObj
                );
                setScreenCastStream(screenStream);
                screenStream.getTracks()[0].onended = () => {
                    peer.replaceTrack(
                        screenStream.getVideoTracks()[0],
                        streamObj.getVideoTracks()[0],
                        streamObj
                    );
                };
                setIsSharing(true);
            });
    };

    const stopScreenShare = () => {
        screenCastStream.getVideoTracks().forEach(function (track) {
            track.stop();
        });
        peer.replaceTrack(
            screenCastStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
        );
        setIsSharing(false);
    };

    const AudioOnOff = (value) => {
        streamObj.getAudioTracks()[0].enabled = value;
        setIsAudio(value);
    };

    const VideoOnOff = (value) => {
        streamObj.getVideoTracks()[0].enabled = value;
        setIsVideo(value);
    };

    const disconnectCall = () => {
        //destroy the peer object
        peer.destroy();
        //redirect to the homepage
        history.push("/");
        window.location.reload();
    };

    return (
        <div className="meetpage-container">
            <div id="video-grid">
                <video id="myVideo" className="video-container1" src="" controlsList="nodownload nofullscreen noremoteplayback"></video>
                <video className="video-container2" src="" controlsList="nodownload nofullscreen noremoteplayback"></video>
            </div>

            <MeetPageHeader
                isChat={isChat}
                setIsChat={setIsChat}
                messageAlert={messageAlert}
                setMessageAlert={setMessageAlert}
            />
            <MeetPageHeader1
                isSharing={isSharing}
                stopScreenShare={stopScreenShare}
                screenShare={screenShare}
                isAudio={isAudio}
                AudioOnOff={AudioOnOff}
                isVideo={isVideo}
                VideoOnOff={VideoOnOff}
                disconnectCall={disconnectCall}
            />
            {isAdmin && meetNowPopup && (
                <MeetingNow setmeetNowPopup={setmeetNowPopup} url={url} />
            )}
            {isChat ? (
                <Chat
                    setIsChat={setIsChat}
                    sendMsg={sendMsg}
                    messageList={messageList}
                />
            ) : (
                messageAlert.isPopup && <Alert messageAlert={messageAlert} />
            )}
        </div>
    );
};

export default MeetPage;