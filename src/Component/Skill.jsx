
import React from 'react';

const SkillsList = ({ skillsData }) => {
  return (
    <div className="container" id="skills">
      <h2 className="mt-4 mb-3 text-center text-white">Skills List</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text">Percentage: {skill.percentage}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
