import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="contact-info">
                <a className="email-link" href="mailto:Krs329@gmail.com">Email Kristin Garbett</a>
                <div className="phone-number">801-809-7437
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;