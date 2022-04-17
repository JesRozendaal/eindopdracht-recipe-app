import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
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
                            <article className="text-box">
                                <p>Having trouble deciding what to eat tonight?</p>
                                <p>Don't worry!</p>
                                <p>Just fill in our decision maker and enjoy your evening.</p>
                            </article>

                            <article className="link-box">
                                <Link to="/decision-maker">
                                    <img src={QuestionMark} alt="question mark" height="225" width="355" className="image"/>
                                    <span className="title-link">
                                        <h4>Decision maker</h4>
                                    </span>
                                </Link>
                            </article>
                        </section>

                        <section className="one=block">
                            <article className="link-box">
                                <Link to="whats-in-your-fridge" className="link-home">
                                <img src={InsideFridge} alt="fridge" height="225" width="355" className="image"/>
                                    <span className="title-link">
                                        <h4>What's in your fridge?</h4>
                                    </span>
                                </Link>
                            </article>
                            <article className="text-box">
                                <p>Do you hate wasting food?</p>
                                <p>Than try our recipe generator where you can fill in what food you've got left in your fridge.</p>
                            </article>
                        </section>

                       <section className="one=block">
                           <article className="text-box">
                               <p>Are you having a great day?</p>
                               <p>Search through all our recipes and find what you want to eat tonight.</p>
                           </article>
                           <article className="link-box">
                               <Link to="/recipes" className="link-home">
                                   <img src={RecipeBook} alt="recipe book" height="225" width="355" className="image"/>
                                   <span className="title-link">
                                       <h4>All our recipes</h4>
                                   </span>
                               </Link>
                           </article>
                       </section>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;