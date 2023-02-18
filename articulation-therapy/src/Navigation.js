import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function Navigation() {
    
    // const [searchInput, setSearchInput] = useState("");
        
    //     const handleChange = (e) => {
    //       e.preventDefault();
    //       setSearchInput(e.target.value);
    //     };
    
    return (
      <div>
        <Navbar className="nav-bar">
      <NavLink 
        exact to="/" 
        className="nav-link"
        activeStyle={{ fontWeight: "bold", color: "pink"
      }}>
        Home
      </NavLink>
      <NavLink 
        exact to="/sounds"
        className="nav-link"
        activeStyle={{ fontWeight: "bold", color: "pink"
      }}>
      Vocalic R Sounds
    </NavLink>
    <NavLink 
      exact to="/games"
      className="nav-link"
      activeStyle={{ fontWeight: "bold", color: "pink"
      }}>
      Games
    </NavLink>
    <NavLink 
      exact to="/addsound"
      className="nav-link"
      activeStyle={{ fontWeight: "bold", color: "pink"
      }}>
      Add Sound
    </NavLink>
    </Navbar>
    </div>
  )
}

export default Navigation;
