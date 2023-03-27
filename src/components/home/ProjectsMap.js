import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { MdLocationOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

export const ProjectsMap = () => {
  const mapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: [-34.9011, -56.1645],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const fetchProjects = async () => {
      const response = await axios.get('http://localhost:3500/projects');
      const projects = response.data;

      projects.forEach((project) => {
        const iconSvg = ReactDOMServer.renderToString(<MdLocationOn size={34} />);
        const icon = L.divIcon({
          html: `<div style="font-size: 34px; color: #4A148C;">${iconSvg}</div>`,
          iconSize: [34, 34],
          className: 'custom-icon',
        });

        const marker = L.marker(project.project_location.split(',').map(Number), { icon })
          .addTo(map)
          .bindTooltip(project.project_name);

        marker.on('click', () => {
          navigate(`/project-details/${project.id}`);
        });
      });
    };

    fetchProjects();
  }, [navigate]);

  return (
    <section className='mb-2'>
      <div className="div-color p-5 d-flex flex-column align-items-center justify-content-center" style={{height: "70vw"}}>
        <h1 className="text-white text-center mb-2 responsive-text">
          Proyectos cercanos a tu ubicación
        </h1>
        <div id="map" ref={mapRef} style={{ width: '90%', height: '90%' }} className="rounded-5"></div>
      </div>
    </section>
  );
};