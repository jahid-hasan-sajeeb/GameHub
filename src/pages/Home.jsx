import React from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;