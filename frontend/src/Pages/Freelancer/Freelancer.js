import React, { useState } from 'react';
import styles from './CSS/freelancer.module.css';

export const Freelancer = () => {
    const [projectData, setProjectData] = useState({
        projectName: '',
        projectDescription: '',
        projectImage: '',
        projectLink: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du projet soumises :', projectData);
        setProjectData({
            projectName: '',
            projectDescription: '',
            projectImage: '',
            projectLink: '',
        });
    };

    // Freelancer.js
    return (
        <div id={styles.freelancerContainer}>
            <h1 id="freelancerTitle">Ajouter un Projet</h1>
            <form id="freelancerForm" onSubmit={handleSubmit}>
                <label htmlFor="projectName">Nom du Projet:</label><br></br>
                <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectData.projectName}
                    onChange={handleInputChange}
                /><br></br>

                <label htmlFor="projectDescription">Description du Projet:</label><br></br>
                <textarea
                    id={styles.projectDescription}
                    name="projectDescription"
                    value={projectData.projectDescription}
                    onChange={handleInputChange}
                ></textarea><br></br>

                <label htmlFor="projectImage">Image du Projet (URL):</label><br></br>
                <input
                    type="text"
                    id={styles.projectImage}
                    name="projectImage"
                    value={projectData.projectImage}
                    onChange={handleInputChange}
                /><br></br>

                <label htmlFor="projectLink">Lien vers le Projet sur le Web:</label><br></br>
                <input
                    type="text"
                    id={styles.projectLink}
                    name="projectLink"
                    value={projectData.projectLink}
                    onChange={handleInputChange}
                /><br></br>

                <button type="submit" id={styles.submitButton}>Ajouter le Projet</button>
            </form>
        </div>
    );

};


