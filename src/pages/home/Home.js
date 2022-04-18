import React from 'react';
import './Home.css';
import Navbar from "../../components/navigation/Navbar";
import Textblock from "../../components/home/Textblock";
import Imageblock from "../../components/home/Imageblock";
import Plate from '../../assets/icons/restaurant_plate_cutlery_food_icon_210114.png';
import QuestionMark from '../../assets/photos/Decision maker.jpg';
import InsideFridge from '../../assets/photos/istockphoto-842160124-612x612.jpg';
import RecipeBook from '../../assets/photos/All recipes.jpg';

const Home = () => {
    return (
        <div>
            <Navbar />

            <header>
                <div className="title-container">
                    <h1>What will you be serving tonight?</h1>
                </div>
            </header>

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <img src={Plate} alt="plate-icon" width="150px"/>
                        <h2>Welcome!</h2>
                        <p>What will you be serving tonight?</p>

                    <div className="container-home-blocks">
                        <section className="one=block">
                            <Textblock
                                title="Having trouble deciding what to eat tonight?"
                                text1="Don't worry!"
                                text2="Just fill in our decision maker and enjoy your evening."
                            />
                            <Imageblock
                                image={QuestionMark}
                                alt="question mark"
                                title="Decision maker"
                                link="/decision-maker"
                            />
                        </section>
                        <section className="one=block">
                            <Imageblock
                                image={InsideFridge}
                                alt="fridge"
                                title="What's in your fridge?"
                                link={"/fridge"}
                                className="link-home"
                            />
                            <Textblock
                                title="Do you hate wasting food?"
                                text1="Than try our recipe generator where you can fill in what food you've got left in your fridge."
                            />
                        </section>
                        <section className="one=block">
                            <Textblock
                                title="Are you having a great day?"
                                text1="Search through all our recipes and find what you want to eat tonight."
                            />
                            <Imageblock
                                image={RecipeBook}
                                alt="recipe book"
                                title="All our recipes"
                                link={"/recipes"}
                                className="link-home"
                            />
                       </section>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;