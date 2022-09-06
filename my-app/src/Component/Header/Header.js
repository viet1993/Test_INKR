import React from 'react';
import './Header.css';
import data from '../../ls-chapter-24293-chapter-data.json'

function Header() {
  return (
    <div className="Header">
        <div className='Header-body'>
            <div className='title'>
                { data.title }
            </div>
            <div className='name'>
                { ' / ' + data.name }
            </div>
        </div>
    </div>
  );
}

export default Header;
