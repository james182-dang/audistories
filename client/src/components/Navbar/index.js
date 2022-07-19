import { Link } from 'react-router-dom';
import './style.css'

function Navbar(props) {
    return (
        <header className='flex-wrap'>
            <h1>
                <a href='#home' onClick={() =>props.setCurrentDisplay('Home')}>AudiStories</a>
            </h1>
            <nav className='d-flex flex-wrap'>
                <ul className='d-flex justify-content-between mb-0'>
                    <li>
                        <a href='#reviews' onClick={() => props.setCurrentDisplay('Reviews')}>Reviews</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;