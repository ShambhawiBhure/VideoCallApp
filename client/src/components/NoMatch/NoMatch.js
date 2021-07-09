import { Link } from 'react-router-dom';
import Header from '../UI/Header/Header';

import './NoMatch.scss';

const NoMatch = () => {
    return (
        <div className="no-match">
            <Header />
            <div className="no-match-content">
                <h2>Invalid Video Call.</h2>
                <div className="action-btn">
                    <Link className="btn blue" to="/">
                        Return to Home Page.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch;