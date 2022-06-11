import { Link } from 'react-router-dom';

const Header = ({ user, logout }) => {
        return <div className="header">
                {
                        user ? <div onClick={logout}>logout</div>
                                :
                                <>
                                        <div><Link to='/login'>login</Link></div>
                                        <div><Link to='/register'>Register</Link></div>
                                </>
                }
        </div>
}

export default Header;