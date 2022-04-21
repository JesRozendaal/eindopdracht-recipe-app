import React, {useState, useEffect} from 'react';
import './Recipe.css';
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import Home from "../../assets/icons/3643769-building-home-house-main-menu-start_113416.png";
import Clock from "../../assets/icons/clock_96305.png";
import Person from "../../assets/icons/favorite_person_icon_216781.png";

const Recipe = () => {
    const[recipes, setRecipes] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=64b9d798657c4f318e70de4bdedc004b&number=10&type=main course`);
                console.log(result.data);
                setRecipes(result.data.recipes);
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[]);

    return (
        <>
            <Header
            title="Recipes"
            className="header-recipe"
            />

            <main>
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>All our recipes</h2>
                        <p>Search through all our recipes and find your favorite one.</p>
                        <p>Do you like to save your favorite recipe? Just <Link to="/login-register">log in or register</Link></p>

                        {recipes&&
                        <div className="container-recipes">
                            {recipes.map((posts) => {
                                return (
                                    <section key={posts.id}>
                                    <article  className="recipe-box">
                                        <img src={posts.image} alt="recipe" width="500px" height="250px" className="image-recipes"/>
                                        <span className="container-text">
                                            <h3>{posts.title}</h3>
                                            <div className="text-recipes">
                                                <p><img src={Clock} alt="clock" className="icons"/>{posts.readyInMinutes} min</p>
                                                <p><img src={Person} alt="person" className="icons"/> {posts.servings} persons</p>
                                            </div>
                                        </span>
                                    </article>
                                    </section>

                                )
                            })
                            }
                        </div>
                        }
                        <button type="button">
                            <strong>
                                Previous
                            </strong>
                        </button>
                        <button type="button">
                            <strong>
                                Next
                            </strong>
                        </button>
                        <Link to="/" className="link-back-home"><strong>Back</strong><img src={Home} alt="home icon" width="25px"/></Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Recipe;