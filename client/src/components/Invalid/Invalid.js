import { Link } from 'react-router-dom';
import Header from '../UI/Header/Header';

import './Invalid.scss';

const Invalid = () => {
    return (
        <div className="invalid">
            <Header />
            <div className="invalid-content">
                <h2>Invalid Video Call.</h2>
                <div className="back-btn">
                    <Link className="btn blue" to="/">
                        Return to Home Page.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Invalid;