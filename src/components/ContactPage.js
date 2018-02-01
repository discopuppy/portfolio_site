import React from 'react';

const ContactPage = () => (
    <div className="container">
        <div className="contactPage__container">
            <div className="page__subheaderContainer">
                <p style={{ fontSize: '200%', marginBottom: '1rem', textDecoration: 'underline', marginTop: '1rem' }}>Contact Me</p>
                <p style={{ fontSize: '125%', marginTop: '0', marginBottom: '4rem' }}>Currently available for freelance work.</p>
            
            
                <span><a href="mailto:zachary.moss@ymail.com" style={{ textDecoration: 'none', color: 'black' }}>zachary.moss@ymail.com</a></span>
                <p><span><a href="https://github.com/discopuppy" style={{ marginRight: '1rem', textDecoration: 'none', color: 'black' }}>Github</a></span> | <span><a href="https://www.linkedin.com/in/zac-moss-40330351" style={{ marginLeft: '1rem', textDecoration: 'none', color: 'black' }}>LinkedIn</a></span></p>
                <p>337.326.8545</p>
                
            </div>
        </div>
    </div>
);

export default ContactPage;