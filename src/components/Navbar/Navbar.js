import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button } from '../Button';

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }



    render() {
    return (
    
        <nav className="NavbarItems">
            {/* League Play button needed below */}
            <div className="navbar-logo">
                <img className="aoelogo" src="/LeaguePlay.png" alt="Logo" /> 
            </div>
            <div className="menu-icon" onClick={this.handleClick}>

                {/* Setting hamburger menu icon below based on clicked. */}
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map ((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.url}>{item.title}
                    
                         </a>
                    </li>
                )
            })}
            </ul>  
            <Button>Sign Up</Button>
        </nav>
    )
    }
}

export default Navbar;