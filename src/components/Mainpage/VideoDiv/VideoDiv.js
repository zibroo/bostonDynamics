import React from 'react';

const VideoDiv = () => {
    return (
        <div className='video-wrapper'>
            <span>Changing your <br /> idea of what <br /> robots can do.</span>
            <video autoplay='autoplay' loop='loop' muted='muted' playsinline>

                <source src='https://www.bostondynamics.com/sites/default/files/background_videos/2021-04/web-banner.mp4' type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoDiv;