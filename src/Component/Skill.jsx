
import React from 'react';

const SkillsList = ({ skillsData }) => {
  return (
    <div className="container bg-white" id="skills">
      <h2 className="mt-4 mb-3 text-center" style={{color:'darkred ',fontWeight:'bolder'}}>Skills List</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card " style={{ border: 'none', backgroundColor: 'transparent' }}>
              <div className="card-body">
                <div className='d-flex'>
                  <img src={skill.image.url} style={{ height:'50px', width:'30px' ,marginRight: '8px'}}></img>
                  <h5 className="card-title">{skill.name}</h5>
                 
                
                </div>
                <p className="" style={{color:'darkred ',fontWeight:'bolder'}}>{skill.percentage}%</p>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam quidem praesentium cupiditate. </p>
                <div className="custom-progress-bar">
                  <div className="progress-line"></div>
                  <div className="progress-marker" style={{ left: `${skill.percentage}%` }}></div>
                </div>
              
              </div>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;


