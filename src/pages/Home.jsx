import React from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import Newsletter from '../components/Newsletter';
import Title from '../hooks/Title';

const Home = () => {
    Title("Home | GameHub")
    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;