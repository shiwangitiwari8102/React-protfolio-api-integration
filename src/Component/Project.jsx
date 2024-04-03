
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

const Project = ({ data }) => {
    return (
        <section className="portfolio" id="projects" style={{ backgroundColor: '#f5f5f5', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container mt-5 p-3">
                <div className="main-text text-center mb-4">
                    <h2 className="heading">My Projects</h2>
                    <span>Take a look at my recent projects</span>
                </div>
                <div className="row justify-content-center">
                    {data.map(project => (
                        <div key={project._id} className="col-md-6 col-lg-4 m-3 mix uiux" style={{ backgroundColor: '#fff', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <div className="portfolio-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <img style={style.img} src={project.image.url} alt={project.title} className="img-fluid" />
                                <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3" style={style.btn}>View Live</a>
                                <a href={project.githuburl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-2" style={style.btn}>View Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
