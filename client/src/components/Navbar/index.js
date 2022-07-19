import { Link } from 'react-router-dom';
import NavbarOption from '../NavbarOption';
import ReplayIcon from '@mui/icons-material/Replay';

function Navbar(props) {
    return (
        <div className='navbar'>
            <h1>
                <a href='#home' onClick={() => props.setCurrentDisplay('Home')}>AudiStories</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href='#reviews' onClick={() => props.setCurrentDisplay('Reviews')}>Reviews</a>
                    </li>
                    <li>
                        <a href='#other' onClick={() => props.setCurrentDisplay('Other')}>Other</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;