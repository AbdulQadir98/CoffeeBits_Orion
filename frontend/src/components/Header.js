import React from 'react';
import '../styles/main.css'
import icon from '../assets/icon.PNG';

const Header = () => {
    return ( 
        <div className='header'>
          <div className='icon'>
            <img src={icon} alt="App Icon"/>
          </div>
          <div className="app-name">
            Orion
          </div>
        </div> 
     );
}
 
export default Header;