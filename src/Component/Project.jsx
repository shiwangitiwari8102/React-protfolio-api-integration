
import React from 'react';

const Project = ({ data }) => {
  const style = {
    img: {
      height: '200px',
      width: 'auto',
    },
    btn: {
      backgroundColor: 'darkred',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontWeight: 'bolder',
      borderRadius: '4px',
    },
  };

  return (
    <div className="container" id="project">
        <div className='m-5'style={{color:'white',fontWeight:'bolder'}} >
       <h2 className="heading text-center">My Projects<br></br></h2>
       <h6 className=" text-center">Take a look at my recent projects</h6>
      </div>
      <div className="row">
        {data.map((project, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card" style={{ border: '1px solid black', backgroundColor: 'white' , borderRadius:'20px' }}>
              <div className="card-body">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img style={style.img} src={project.image.url} alt={project.title} className="img-fluid" />
                </div>
                <div className="portfolio-content">
                  <h3 className='m-4'>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3" style={style.btn}>See Project</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
