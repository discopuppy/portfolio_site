import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        {/*<div className="header__container">
            <div className="header__content">
                <div className="logo__container">
                    <p className="header__logo">ZM</p>
                </div>
                <div className="nav__container">
                    <div className="nav__container2">
                        <span className="nav__item about">
                            <NavLink to="/" activeClassName="is-active" className="nav__link" exact={true}>About</NavLink>
                        </span>
                        <span className="nav__item">
                            <NavLink to="/portfolio" activeClassName="is-active" className="nav__link" exact={true}>Portfolio</NavLink>
                        </span>
                        <span className="nav__item contact">
                            <NavLink to="/contact" activeClassName="is-active" className="nav__link">Hire Now</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>*/}

        <div className="header__container2">
            <div className="header__content2">
                <div className="nav__container3">
                    {/*<div className="nav__container2">*/}
                        <span className="nav__item about">
                            <NavLink to="/" activeClassName="is-active" className="nav__link" exact={true}>About</NavLink>
                        </span>
                        <span className="nav__item">
                            <NavLink to="/portfolio" activeClassName="is-active" className="nav__link" exact={true}>Portfolio</NavLink>
                        </span>
                        <span className="nav__item contact">
                            <NavLink to="/contact" activeClassName="is-active" className="nav__link">Hire Now</NavLink>
                        </span>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </header>
);

export default Header;