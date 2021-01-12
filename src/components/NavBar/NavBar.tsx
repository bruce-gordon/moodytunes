import { Link } from "react-router-dom";
import { musicNote } from '../../utilities/icons';
import './NavBar.css'; 

function NavBar() {
    return (
        <header className="app-header">
        <div className="music-note" id="note-one">
          { musicNote }
        </div>
         <div className="music-note" id="note-two">
          { musicNote }
        </div>
        <div className="music-note" id="note-three">          
        { musicNote }
        </div>
        <div className="music-note" id="note-four">          
        { musicNote }
        </div>
        <div className="music-note" id="note-five">          
        { musicNote }
        </div>
        <div className="music-note" id="note-six">          
        { musicNote }
        </div>
        <div className="music-note" id="note-seven">          
        { musicNote }
        </div>
        <Link to="/" className="app-name-link">
          <h1>MoodyTunes</h1>
        </Link>
        <nav className='link-container'>
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