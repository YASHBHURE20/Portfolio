import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a dedicated and versatile web developer with a strong passion for creating innovative
        solutions and solving complex problems. With Bachelors Degree in Computer Science from IIIT NAGPUR, 
        I have honed my skills in both front-end and back-end development, allowing me to craft seamless and user-friendly 
        web applications.
        </p>

        <br />

        <p className="text-xl">
        Beyond coding, I am an excellent communicator and team player. I thrive in collaborative environments where I can share 
        ideas, learn from others, and contribute to a collective vision. I believe in building strong relationships with clients 
        and colleagues based on trust, respect, and effective communication.
        </p>
      </div>
    </div>
  );
};

export default About;