import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import './Alert.scss';


const Alert = ({messageAlert}) => {
    return (
        <div className="alert-popup" >
            <div className = "alert-header">
                <FontAwesomeIcon className = "icon" icon = {faCommentAlt} />
                {/* the sender */}
                <h3>{messageAlert.payload.user}</h3>    
            </div>
            {/* the message */}
            <p className = "alert-msg">{messageAlert.payload.msg}</p>
        </div>
    )
}

export default Alert;