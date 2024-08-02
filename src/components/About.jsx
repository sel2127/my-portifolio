import React from 'react';
import photo from '../assets/photo.jpg'; 

const About = () => {
  return (
    <section id="about" className="mb-8 flex items-center justify-center">
      <div className="w-1/2">
        <h2 className="lg:text-5xl font-bold mb-4 text-white">Hi, I am Selina</h2>
        <p className="text-lg text-white">
          I am a passionate software developer with a Bachelor of Science in Software Engineering from Addis Ababa Science and Technology University. 
          I specialize in building web applications using React and other modern technologies. 
          I am dedicated to creating high-quality, user-friendly interfaces and contributing to 
          innovative projects.
        </p>
      </div>
            <img src={photo} alt="Selina" className="w-1/4 h-auto rounded-full shadow-lg mr-6" />

    </section>
  );
}

export default About;
