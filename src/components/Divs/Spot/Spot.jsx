import React from 'react';
import { useHistory } from 'react-router';

const Spot = () => {
    const history = useHistory()
    return (
        <div className='spot'>
            <div className="text-container">
                <div className="text-spot">
                    <p>Spot</p>
                    <span>Automate data capture <br /> and inspection.</span>
                    <br />
                    <div className="btn-container-spot">
                        <button onClick={() => { history.push('/shop') }}>SEE SPOT</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Spot;