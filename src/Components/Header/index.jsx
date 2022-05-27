import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

class Header extends React.Component {
  /*showSettings(event) {
    event.preventDefault();

  }*/

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a className="menu-item" href="/about">About</a>
        <a className="menu-item" href="/history">History</a>
        <a className="menu-item" href="/curiosity">Curiosity</a>
        <img className='img' src="https://steamuserimages-a.akamaihd.net/ugc/1843666793278731225/FF4432C8A961ABE9B0DBEB12C2E227494BEB6A34/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="image malenia" />
      </Menu >
    );
  }
}

export default Header;
