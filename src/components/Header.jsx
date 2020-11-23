import '../App.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
    const [showUp, setShowUp] = useState(-100)

    const openUp = () => setShowUp(0)

    const closeUp = () => setShowUp(-100)

    return (
        <div className="header">
            <ul>
                <li>
                    <div className="logo">
                        <img src="../../assets/images/logo.png"/>
                    </div>
                </li>
                <li className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Pricing</li>
                        <li>Careers</li>
                    </ul>
                </li>
                <li className="search">
                    <div className="search__icon">
                        <img src="../../assets/images/search.svg" />
                    </div>
                    <div className="drawer__icon">
                        { showUp === 0 ? <FaTimes onClick={closeUp} /> : <GiHamburgerMenu onClick={openUp}/>}
                    </div>
                </li>
            </ul>
            <div 
                className="nav"
                style={{transform: `translateX(${showUp}%)`}}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Pricing</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default Header