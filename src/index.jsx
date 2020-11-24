import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">BeeScale</div>
    <div className="navbar__contact navbar__item">Kontakt</div>
    <div className="navbar__eshop navbar__item">E-shop</div>
  </header>
);

const App = () => (
  <div>
    <NavBar />
    <main></main>
  </div>
);

render(<App />, document.querySelector('#app'));
