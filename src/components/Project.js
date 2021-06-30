import React from 'react';

export const Project = () => {
  return (
    <div className="project">
      <div className="project__img-container">
        <img
          src="./images/Template.jpg"
          alt="Project picture"
          className="project__img"
        />
      </div>
      <div className="project__description-container">
        <h2>Lawful</h2>
        <h3>Technologies</h3>
        <ul>
          <li>C#</li>
          <li>.NET Framework</li>
          <li>UWP</li>
          <li>SQL Server</li>
        </ul>
        <h3>Description</h3>
        <p>Blablabla blabla blablalbla</p>
      </div>
    </div>
  );
};
