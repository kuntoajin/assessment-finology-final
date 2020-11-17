import '../App.css'

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
                <li>
                    <div className="search">
                        <img src="../../assets/images/search.svg" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header