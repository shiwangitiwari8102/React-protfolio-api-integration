import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AboutMe from './Component/About';
import Services from './Component/Services';
import Project from './Component/Project';
import Timeline from './Component/Timeline';

import SkillsList from './Component/Skill';
import Contact from './Component/Contact';
import Footer from './Component/Footer';



const App = () => {
    const [heroData, setHeroData] = useState({});
    const [aboutData, setAboutData] = useState({});
    const [projectData, setprojectData] = useState([]);
    const [ServicesData, setServicesData] = useState([]);
    const [timelineData, settimelineData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [contactData, setContactData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
              console.log('Response status:', response.status);
              const data = await response.json();
              console.log('Response data:', data); // Log the entire response data
              setHeroData(data.user.about);
              setAboutData(data.user.about);
              setprojectData(data.user.projects);
              setServicesData(data.user.services);
              settimelineData(data.user.timeline);
              setSkillData(data.user.skills);
              setContactData(data.user.about);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  }, []);
  

    return (
        <div >
            <Navbar />
             <Hero data={heroData} />
             {/* <AboutMe data={aboutData}></AboutMe>  */}
             
             <Services data={ServicesData}></Services>
             <SkillsList skillsData={skillData}></SkillsList>
             <Project data={projectData}></Project>
            
             <Timeline data={timelineData}></Timeline>
             

             <Contact contactInfo ={contactData}></Contact>
             <Footer></Footer>
          
             
        </div>
    );
}

export default App;
