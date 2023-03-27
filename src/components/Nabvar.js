import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/GV_Logo_transparent.png';

export default function Nabvar() {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div className="container-fluid">
    <Link className="nav-logo-text" to="/"><img src={Logo} className="nav-logo-img" /></Link>
    <Link className="nav-logo-text" to="/">GeekVolunteers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-3">
        <li className="nav-item ms-2">
        <Link className="nav-link custom-nav-link" to="/">Nosotros</Link>
        </li>
        <li className="nav-item ms-2">
        <Link className="nav-link custom-nav-link" to="/">Voluntariado</Link>
        </li>
        <li className="nav-item ms-2">
        <Link className="nav-link custom-nav-link" to="/">Visión</Link>
        </li>
        <li className="nav-item ms-2">
        <Link className="nav-link custom-nav-link" to="/">Formate!</Link>
        </li>
        <li className="nav-item ms-2">
        <Link className="nav-link custom-nav-link" to="/">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
