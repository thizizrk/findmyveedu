import { Link } from 'react-router-dom';
import './style.scss';
const Navbar = () => {
    return (
        <div className='header bg-teal'>
            <div className="nav container">
                <div className="logo">
                    <h3>FMV</h3>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/properties'>Properties</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar