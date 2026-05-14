import React from "react";
import Project from "../components/project.jsx";

const ProjectPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="w-full max-w-5xl">
        <h1
          className="text-4xl font-extrabold mb-12 tracking-tight text-left"
          style={{ color: "var(--text-color)" }}
        >
          My Projects
        </h1>
      </div>

      <div className="max-w-5xl w-full space-y-10">
        {/* Weather Dashboard */}
        <Project
          title="A Weather Dashboard – Real-Time Weather Information App"
          description="A modern and responsive Weather Dashboard built with React that allows users to search for any city and view real-time weather information. The application fetches live data from a weather API and displays current temperature, weather conditions, humidity, wind speed, and a multi-day forecast.

The project demonstrates core React concepts such as functional components, hooks (useState, useEffect), API integration, and conditional rendering. It is fully responsive and optimized for a smooth user experience across devices."
          github="https://github.com/Abbas-shah10/weather-dashboard"
          live="https://weather-dashboard-five-beige.vercel.app/"
          status="Live"
          papers={[
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
              className="w-10 h-10"
            />,
          ]}
          color="#7C4DFF"
        />
        {/* Storage Management */}
        <Project
          title="A Storage Management App – Efficient Data Organization Solution"
          description="A comprehensive Storage Management application built with React that provides users with a seamless way to organize, categorize, and access their digital files. The application features a clean and intuitive interface, allowing users to create folders, upload files, and search through their storage efficiently.

The project demonstrates core React concepts such as functional components, hooks (useState, useEffect), API integration, and conditional rendering. It is fully responsive and optimized for a smooth user experience across devices."
          github="https://github.com/Abbas-shah10/storage-management"
          live="https://storage-management-taupe.vercel.app/sign-up"
          status="Live"
          papers={[
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              className="w-10 h-10"
            />,
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
              className="w-10 h-10"
            />,
          ]}
          color="#7C4DFF"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
