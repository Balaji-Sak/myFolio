

function Header() {

    return (
        <header>

            <nav className="navbar">
                <div className="navbar-contianer">
                    <a href="portfolio.html" className="logo">Portfolio</a>
                    
                    <ul className="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button className="navbar-toggle">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>


            </nav>
            <hr />
        </header>
    );



}
export default Header