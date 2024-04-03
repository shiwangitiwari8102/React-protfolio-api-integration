
import React, { useState } from 'react';
const style ={
    btn: {
        backgroundColor:'darkred' ,
        
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontWeight: 'bolder',
        borderRadius: '4px',
    },
}

const Contact = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
   
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container m-5  bg-white" id="contact">
      <h2 className="text-center" style={{color:'darkred',fontWeight:"bolder"}}>Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="p-4 rounded">
            <h4>Contact Information</h4>
            <p><strong>Address:</strong> {contactInfo.address}</p>
            <p><strong>Email:</strong> {contactInfo.contactEmail}</p>
            <p><strong>Phone:</strong> {contactInfo.phoneNumber}</p>
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-4 rounded">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn mt-2" style= {style.btn} >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
