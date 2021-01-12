import { Route, Switch, Link } from "react-router-dom";
import { musicNote } from '../../utilities/icons';
import './NavBar.css'; 

function NavBar() {
    return (
        <header className="app-header">
        <div id = "music-note">
          { musicNote }
        </div>
        <Link to="/" className="app-name-link">
            <h1 className="app-name">MoodyTunes</h1>
          </Link>
        {/* <h1 className="app-name">MoodyTunes</h1> */}
        <nav>
          <Link to="/" className="nav-btn-link">
            <div className="nav-btn">Home</div>
          </Link>
          <Link to='/favorites' className='nav-btn-link'>
            <div className='nav-btn'>Favorites</div>
          </Link>
        </nav>
      </header>
    )
}

export default NavBar;