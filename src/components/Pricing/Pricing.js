import React, { Component } from 'react'
import Header from '../Header/Header'
import './Pricing.css'

export default class Pricing extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='info'>
                    <h1>Portrait Collections</h1>
                    <div className='session-types'>
                        <h2>Family Session $150</h2>
                        <p>-Up to 6 people, each additional person $15</p>
                        <p>-35+ images</p>
                        <p>-Digital Online Gallery</p>
                        <p>–Printing Rights</p>
                    </div>
                    <div className='session-types'>
                        <h2>Senior /Child Session $125</h2>
                        <p>-30+ images</p>
                        <p>-Digital Gallery</p>
                        <p>–Print Release</p>
                    </div>
                    <div className='session-types-last'>
                        <p id='fine-print'>At the time of booking, a $50 deposit is due to secure your session date. Remaining balance is due the day of your session. You can expect to receive your images 2-3 weeks after your session date. Travel fees may apply
                    </p> 
                    </div>
                </div>
            </div>
        )
    }
}
