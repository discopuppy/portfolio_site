import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = (props) => {
    return (
        <div className="portfolio__container">
            <div className="portfolio__background">
                <div className="page__subheaderContainer">
                    <h1>Portfolio</h1>
                    <p>Check out the stuff I've done</p>
                </div>
                <div className="portfolio__cardContainer">
                    <div className="project__card">
                        <div className="card__title">
                            <a href="http://zacmoss-com.stackstaging.com/16-events/">Event Poster</a>
                        </div>
                        <div className="card__subtitle">
                            <span className="subtitle__style">PHP, MySQL, JQuery, HTML, CSS</span>
                        </div>
                        <div className="card__image">
                            <a href="http://zacmoss-com.stackstaging.com/16-events/"><img src="/images/eventPosterPhp.png" alt={"image"} width="325" height="220"/></a>
                        </div>
                    </div>
                    <div className="project__card">
                        <div className="card__title">
                            <a href="https://zacs-expensify-app.herokuapp.com/">Expensify App</a>
                        </div>
                        <div className="card__subtitle">
                            <span className="subtitle__style">React, Redux, Webpack, Sass </span>
                        </div>
                        <div className="card__image">
                            <a href="https://zacs-expensify-app.herokuapp.com/"><img src="/images/expensifyApp.png" alt={"image"} width="325" height="220"/></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__cardContainer">
                    <div className="project__card">
                        <div className="card__title">
                            <a href="https://enigmatic-hamlet-53385.herokuapp.com/">FoodPicker App</a>
                        </div>
                        <div className="card__subtitle">
                            <span className="subtitle__style">This is the project subtitle.</span>
                        </div>
                        <div className="card__image">
                            <a href="https://enigmatic-hamlet-53385.herokuapp.com/"><img src="/images/foodpickerApp.png" alt={"image"} width="325" height="220"/></a>
                        </div>
                    </div>
                    <div className="project__card">
                        <div className="card__title">
                            <a href="https://louisianajones.herokuapp.com/">La Jones Blog</a>
                        </div>
                        <div className="card__subtitle">
                            <span className="subtitle__style">This is the project subtitle.</span>
                        </div>
                        <div className="card__image">
                            <a href="https://louisianajones.herokuapp.com/"><img src="/images/louisianajonesApp.png" alt={"image"} width="325" height="220"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;