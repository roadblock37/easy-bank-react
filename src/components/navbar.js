import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.svg'
// array of links to populate navbar dynamically
const links = [
    {id: 1, link: "Home"},
    {id: 2, link: "About"},
    {id: 3, link: "Contact"},
    {id: 4, link: "Blog"},
    {id: 5, link: "Careers"},

];

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);

    // toggle for mobile nav to show links
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }


    return (
        <nav>
            <div className='nav-header'>
                <img src={logo} alt='logo' className='logo'/>
                <button className='nav-toggle' onClick={toggleLinks}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;