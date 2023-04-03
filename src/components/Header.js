import React from 'react'
import './Head.css'

function Header() {
  return (
    <div className='header-box'>
        <header>
        <h2>Url Shortner</h2>
            <nav className='nav_link'>
                <ul>
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>contact us</a></li>
                </ul>
            </nav>
            <button>logout</button>
        </header>
    </div>
  )
}

export default Header