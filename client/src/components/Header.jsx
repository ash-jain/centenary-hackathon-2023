import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <main>
            <HashLink to={ "/#home" }> Home </HashLink>
            <HashLink to={ "/login" }> Login </HashLink>
            <HashLink to={ "/#about" }> About </HashLink>
            <HashLink to={ "/#brands" }> Brands </HashLink>
            <HashLink to={ "/services" }> Services </HashLink>
        </main>
    </nav>
  )
}

export default Header;
