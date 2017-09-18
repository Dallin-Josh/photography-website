 
import React, { Component } from 'react';
import Header from '../Header/Header';
import './Landing.css'


class Landing extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="family-landing-pic" >
                <div className='social-media'>
                    <a href=''><i className="fa fa-facebook-official fa-2x" aria-hidden="true" ></i></a>
                    <a href=''><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                    <a href=''><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                    <a href=''><i class="fa fa-pinterest-square fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
            </div>
        );
    }
}

export default Landing;

