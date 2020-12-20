import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider/StateProvider'
import { auth } from '../firebase';


function Header() {
    const[{ cart, user }] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    };


    return (
        <div className="header">

            <div className = "header__hamburger">
                <div className="show__headerHamburger"></div>
                <div className="show__headerHamburger"></div>
                <div className="show__headerHamburger"></div>
            </div> 

            <Link to="/">
                <img className="header__logo" src={logo} alt=" " />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick = {login} className="header__option">
                        <span class="header__optionLineOne">Hello !</span>
                        <span class="header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span class="header__optionLineOne">Return</span>
                        <span class="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span class="header__optionLineOne">Try</span>
                        <span class="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to = "/checkout" className = "header__link">
                    <div className = "header__optionCart">
                        <ShoppingCartOutlinedIcon />
                        <span class="header__optionLineTwo">{cart?.length}</span>
                    </div>
                </Link>
            </div>

            
        </div>
    )
}

export default Header;
