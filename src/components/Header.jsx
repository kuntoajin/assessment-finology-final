import '../App.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
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
                        <GiHamburgerMenu onClick={() => console.log('test')}/>
                    </div>
                </li>
            </ul>
            <div className="nav">
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