import React from 'react';
import { useHistory } from 'react-router';


const Stretch = () => {
    const history = useHistory()
    return (
        <div className="stretch">
            <div className="text-container">
                <div className="text-stretch">
                    <p>Stretch</p>
                    <span>Mobile, automated case handling for more <br /> efficient warehouse operations.</span>
                    <br />
                    <div className="btn-container-stretch">
                        <button onClick={() => { history.push('/shop') }}>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stretch;