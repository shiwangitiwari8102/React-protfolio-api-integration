import React from 'react';
import '../App.css';

const Timeline = ({ data }) => {
    
    const educationData = data.filter(job => job.forEducation);
    const experienceData = data.filter(job => !job.forEducation);

    return (
        <section className="timeline" id="timeline" style={{ backgroundColor: 'grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container mt-5 p-3">
                <div className="main-text text-center mb-5">
                    <h2 className="heading" style={{ color: 'darkred', fontWeight: 'bolder' }}>RESUME</h2>
                    <span>My journey</span>
                </div>
                <div className="row justify-content-center">
                   
                    <div className="col-md-6">
                        <h3 className='text-center'>Education</h3>
                        <hr></hr>
                        {educationData.map((job, index) => (
                            <div key={job._id} className="m-3 bg-transparent" style={{ padding: '20px' }}>
                                <h4>{job.company_name}</h4>
                                <p>{job.jobTitle}</p>
                                <p>{job.startDate} - {job.endDate}</p>
                                <ul>
                                    {job.bulletPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    
                    <div className="col-md-6">
                        <h3 className='text-center'>Experience</h3>
                        <div>
                            <hr></hr>
                        </div>
                        {experienceData.map((job, index) => (
                            <div key={job._id} className="m-3  bg-transparent" style={{ padding: '20px' }}>
                                <h4>{job.company_name}</h4>
                                <p>{job.jobTitle}</p>
                                <p>{job.startDate} - {job.endDate}</p>
                                <ul>
                                    {job.bulletPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;

