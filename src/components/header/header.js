import { Link} from 'react-router-dom';



const Header = () => {
    return(
        <div className="header">
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/cart'>Basket</Link></div>
        </div>
    )
}
export default Header;
