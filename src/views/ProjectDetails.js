import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(`http://localhost:3500/projects/${id}`);
      setProject(response.data);
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }
console.log(project)

  return (
    <div>
      <h1>{project.project_name}</h1>
      <p>By {project.user_name}</p>
      <p>{project.project_description}</p>
    </div>
  );
};