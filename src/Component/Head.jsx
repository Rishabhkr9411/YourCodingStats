import React from 'react'
import './head.css'
import { LOGO_URL } from '../utils/constants'
import { Link ,NavLink} from 'react-router-dom'

function Head() {
    return (
        <>
        <div className='header'>
            <div className='container'>
                <Link to="/"><div className='logo'>
                    <img className='logo-img' src={LOGO_URL} />
                    <div className='logo-name'>CodingStats</div>
                </div>
                </Link>
                <nav className='nav'>
                        <Link to="/home"> <div className='nav-items'>Home</div></Link>
                        <Link to="/about"><div className='nav-items'>About Me</div></Link>
                        <Link to="/contact"> <div className='nav-items'>Contact</div></Link>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Head
