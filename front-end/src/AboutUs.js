import React, { useEffect, useState } from 'react';
import axios from 'axios';
import aboutUsImage from './bobby666.jpg'; // Import the image

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/about-us');
        setAboutUsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>{aboutUsData.text}</p>
      <img src={aboutUsImage} alt="Photo of Bobby Impastato" />
      {/* Add more content as needed */}
    </div>
  );
};

export default AboutUs;