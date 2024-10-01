import { Link } from 'react-router-dom'
import Logout from './Logout'
import CheckAuth from './CheckAuth'

function Navbar() {
    return (
        <nav>
            <CheckAuth />
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/my-songs">My Songs</Link>
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
