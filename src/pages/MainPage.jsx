import React from 'react';
import Spot from '../components/Divs/Spot/Spot';
import Line from '../components/Mainpage/Line/Line';
import VideoDiv from '../components/Mainpage/VideoDiv/VideoDiv';
import Navbar from '../components/Navbar/Navbar';

const MainPage = () => {
    return (
        <>
            <Navbar />
            <VideoDiv />
            <Line />
            <Spot />
        </>
    );
};

export default MainPage;