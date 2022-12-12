import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.svg';

// array of links to populate navbar dynamically
const links = [
    {id: 1, url: "/", text: "Home"},
    {id: 2, url: "/about", text: "About"},
    {id: 3, url: "/contact", text: "Contact"},
    {id: 4, url: "/blog", text: "Blog"},
    {id: 5, url: "/careers", text: "Careers"},
];

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    // toggle for mobile nav to show links
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    // every time showLinks changes get the height of the ul of links and change the height style
    // of the links container to match.  This ensures all links will be displayed if links are added/removed
    // or styling changes.
    // if showlinks is false then the height of the links container is 0px so it is hidden
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        console.log(linksHeight)
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }
        else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);


    return (
        <nav>
            <div className='nav-header'>
                <img src={logo} alt='logo' className='logo'/>
                <button className='nav-toggle' onClick={toggleLinks}>
                    
                {showLinks? <FontAwesomeIcon icon={faXmark}/>: <FontAwesomeIcon icon={faBars}/> }
                </button>
            </div>
            {/* container that holds the ul of links */}
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                    {links.map((link) => {
                        const {id, url, text} = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;