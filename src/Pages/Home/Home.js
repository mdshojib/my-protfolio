import React from 'react';
import ContactFrom from '../ContactFrom/ContactFrom';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';

const Home = () => {
    return (
        <>
        <Navigation></Navigation>
        <Profile></Profile>
        <ContactFrom></ContactFrom>
        </>
    );
};

export default Home;