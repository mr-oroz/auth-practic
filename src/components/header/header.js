import { Link } from 'react-router-dom';

const Header = () => {
    return <div className="header">
                <div><Link to='/login'>login</Link></div>
                <div><Link to='/register'>Register</Link></div>
        </div>
}

export default Header;