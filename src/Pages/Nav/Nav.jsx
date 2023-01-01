import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
    const [nav, setNav] = useState(false)
    const navbtnclick = () => {
        setNav(prev => !prev)
    }
    return (
        <div>
            <nav className='classmasternav'>
                <div className="Logo" style={{display: 'flex', alignItems: 'center'}}>
                    <img src="https://classmaster.netlify.app/front/img/logo_white.png" width={'50px'} style={{margin: '0 25px 0 0'}} alt="" />
                    <h4>classmaster.uz</h4>
                    <button onClick={navbtnclick}><i class="fa fa-bars" aria-hidden="true"></i></button>
                </div>
            </nav>
            <ul className={nav ? 'shownav' : 'navul'}>
                <div>
                    <li><Link to='/'>Features</Link></li>
                    <li><Link to='/'>Community & Help</Link></li>
                    <li><Link to='/'>Flashcard</Link></li>
                    <li><Link to='/'>Notes</Link></li>
                    <li><Link to='/'>Record</Link></li>
                    <li><Link to='/'>English</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Nav