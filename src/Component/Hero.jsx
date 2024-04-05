

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Hero = ({ data }) => {
    const { name, title, description, phoneNumber, contactEmail, avatar, address } = data;

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth > 768); 
    };

    useEffect(() => {
        updateScreenSize(); 
        window.addEventListener('resize', updateScreenSize); 
        return () => window.removeEventListener('resize', updateScreenSize); 
    }, []);

    return (
        <section className="home" id="hero">
            <div className="container p-5">
                <div className="row align-items-center">
                    {isLargeScreen && avatar && (
                        <div className="col-lg-4">
                            <img
                                src={avatar.url}
                                alt={name}
                                style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                            />
                        </div>
                    )}
                    <div className={isLargeScreen ? "col-lg-8" : "col"}>
                        <div className="hero-info">
                            <p>Welcome To my World</p>
                            <h1 className='head'>{name}</h1>
                            <div className="text-animate pt-3">
                                <h2 className='text-light'> I am a {title}</h2>
                            </div>
                            <p> {description}</p>
                            <h6> Phone-number: {phoneNumber}</h6>
                            <h6> Email-id: {contactEmail}</h6>
                            <h6> Address: {address}</h6>
                            {!isLargeScreen && avatar && (
                                <div className="mt-3">
                                    <img
                                        src={avatar.url}
                                        alt={name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            )}
                            <div className="btn-box d-flex  flex-wrap mt-3">
                               
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#3b5998' }}>
                                    <FaFacebook size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#1DA1F2', marginLeft: '10px' }}>
                                    <FaTwitter size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#e4405f', marginLeft: '10px' }}>
                                    <FaInstagram size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#e4405f', marginLeft: '10px' }}>
                                    <FaLinkedinIn size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                <a href="" target="_blank" className="btn d-CV mt-2" style={{ backgroundColor: 'darkred', color: 'white', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', minWidth: '200px', marginLeft: '20px' }}>
                                    Download CV <i className='bx bx-download'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

