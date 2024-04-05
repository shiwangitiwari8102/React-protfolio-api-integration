
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const style = {
  btn: {
    backgroundColor: 'darkred',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontWeight: 'bolder',
    borderRadius: '4px',
  },

};

const Contact = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <div className=" m-5" id="contact">
      <h2 className="text-center" style={{ color: 'darkred', fontWeight: 'bolder' }}>
        Contact Us
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-4 rounded">
            <h4 style={{ fontWeight: 'bolder' }}>Contact Information</h4>
            <p>
              <FaMapMarkerAlt /> <strong>Address:</strong> {contactInfo.address}
            </p>
            <p>
              <FaEnvelope /> <strong>Email:</strong>{contactInfo.contactEmail}
            </p>
            <p>
              <FaPhone /> <strong>Phone:</strong> {contactInfo.phoneNumber}
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
            <div className="form-group">
              <label htmlFor="name" style={{ fontWeight: 'bolder' }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontWeight: 'bolder' }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{ fontWeight: 'bolder' }}>
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn mt-2" style={style.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
