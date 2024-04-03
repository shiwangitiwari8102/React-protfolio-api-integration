import React from 'react';
import '../App.css';

const Timeline = ({ data }) => {
    return (
        <section className="timeline" id="timeline" style={{ backgroundColor: '#f5f5f5', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container mt-5 p-3">
                <div className="main-text text-center mb-5">
                    <h2 className="heading" style={{ color:'darkred', fontWeight:'bolder'}}>My Work Experience</h2>
                    <span>Take a look at my professional journey</span>
                </div>
                <div className="row justify-content-center">
                    {data.map(job => (
                        <div key={job._id} className="col-md-6 col-lg-4 m-3" style={{ backgroundColor: '#fff', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <h3>{job.company_name}</h3>
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
        </section>
    );
}

export default Timeline;
