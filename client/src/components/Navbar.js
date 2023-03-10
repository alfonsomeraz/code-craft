import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>COV-X</h1>
                </Link>
            </div>
            <nav>
                <div className="nav-list">
                    <ul>
                        <li><button className="nav-button">Exams</button></li>
                        <li><button className="nav-button">Admin</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
