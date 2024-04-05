import React, { useEffect, useState } from 'react';

const AboutMe = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

   
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerStyle = {
        ...styles.container,
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'scale(1)' : 'scale(0.8)', 
        transition: 'opacity 0.5s ease, transform 0.5s ease', 
    };

    return (
        <div className="about-content" id="about"style={styles.centered}>
            <div className="about-container" style={containerStyle}>
                <h2 className="heading" style={styles.heading}>About Me</h2>
                <h3 style={styles.subheading}>{data.name}</h3>
                <p style={styles.skillTitle}>{data.subTitle}</p>
                
                <div className="content-btn">
                    <div className="content">
                        <div className="text-box">
                            <span style={styles.skillDescription}>{data.description}</span>
                        </div>
                        <div className="text-box">
                            <p style={styles.skillTitle}>Experience: {data.exp_year} years</p>
                            <span style={styles.skillDescription}>{data.quote}</span>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        opacity: 0, 
        transform: 'scale(0.8)', 
        backgroundColor:'#f5f5f5',
        color: '#333',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    heading: {
        fontWeight:'bolder',
        fontSize: '24px',
        marginBottom: '10px',
        textAlign: 'center',
        color:'rgb(132, 93, 47)'
    },
    subheading: {
        fontWeight:'bolder',
        color:'#4E0707',
        fontSize: '20px',
        marginBottom: '15px',
        textAlign: 'center',
    },
    skillTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    skillDescription: {
        fontSize: '14px',
    },
    centered: {
        display: 'flex',
       
        height: '50%',
    },
};

export default AboutMe;

