import React, { useState, useEffect } from 'react';
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
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    )}

                    <div className={isLargeScreen ? "col-lg-8" : "col"}>
                        <div className="hero-info">
                            <p>Welcome To my World</p>
                            <h1 className='head'>{name}</h1>

                            <div className="text-animate pt-3">
                                <h2 className='text-light'>{title}</h2>
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
                        </div>
                    </div>
                </div>

                
                <div className="row justify-content-center mt-3">
                    <div className={isLargeScreen ? "col-lg-8" : "col"}>
                        <div className="btn-box d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start" style={{ gap: '20px' }}>
                            <a href="mailto:portfolio3@gmail.com" className="btn border-box" style={{ backgroundColor: 'darkred', color: 'white', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', minWidth: '200px' }}>
                                Hire Me Now ! <i className='bx bx-right-arrow-alt'></i>
                            </a>
                            <a href="" target="_blank" className="btn d-CV" style={{ backgroundColor: 'darkred', color: 'white', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', minWidth: '200px' }}>
                                Download CV <i className='bx bx-download'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

