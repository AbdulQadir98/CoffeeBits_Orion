import React from 'react';
import '../styles/main.css'
import icon from '../assets/icon.jpeg';

const Header = () => {
    return ( 
        <div className='header'>
          <div className='icon'>
            <img src={icon} alt="App Icon"/>
          </div>
          <div class="app-name">
            Orion
          </div>
        </div> 
     );
}
 
export default Header;