import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Kristin Garbett</h1>
                <Link to='/'><div>Home</div></Link>
                <Link to='/about'><div>About</div></Link>
                <Link to='/pricing'><div>Pricing</div></Link>
                <div>Contact</div>
            </div>
        )
    }
}
