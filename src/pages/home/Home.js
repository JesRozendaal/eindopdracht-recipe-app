import React from 'react';
import './Home.css';
import Navbar from "../../components/navigation/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <header>
                <div className="title-container">
                    <h1>What will you be serving tonight?</h1>
                </div>
            </header>
        </div>
    );
};

export default Home;