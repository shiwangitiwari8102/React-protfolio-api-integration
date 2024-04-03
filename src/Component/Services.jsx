import React from 'react';
import '../App.css';

const style ={
    btn: {
        backgroundColor:'darkred' ,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontWeight: 'bolder',
        borderRadius: '4px',
    },
    img:{
        height:'200px', width:'auto',

    }
}

const Services = ({data}) => {
    return (
        <section className="portfolio" id="services" style={{ backgroundColor: '#f5f5f5', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container mt-5 p-3">
                <div className="main-text text-center mb-4">
                    <h2 className="heading">My Services</h2>
                    <span>What I will do for you</span>
                </div>
                <div className="row justify-content-center ">
                    {data.map(service => (
                        <div key={service._id} className="col-md-6 col-lg-4 m-3 mix uiux" style={{ backgroundColor: '#fff', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <div className="portfolio-content">
                                <h3>{service.name}</h3>
                                <p>{service.desc}</p>
                                <p>{service.charge}</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <img style={style.img} src={service.image.url} alt={service.name} className="img-fluid" />
                                <a href="#" className="btn btn-primary mt-3" style={style.btn}>Explore More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

