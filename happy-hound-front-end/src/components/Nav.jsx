import React from 'react'
import HappyHoundLogo from '../assets/hh (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    return(
        <nav>
            <div className='navContainer'>
                <a href="">
                    <img src={HappyHoundLogo} alt="" />
                </a>
                <ul className='navLinks'>
                    <li className='navList'>
                        <a href="/" className='navLink'>
                            Home
                        </a>
                    </li>

                    <li className='navList'>
                        <a href="/" className='navLink'>
                            Shop
                        </a>
                    </li>

                    <li className='navList'>
                        <a href="/" className='navLink'>
                        <FontAwesomeIcon icon="cart-shopping" />
                        </a>
                    </li>

                    <li className='navList'>
                        <a href="/" className='navLink'>
                            Sign In/Sign Out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
