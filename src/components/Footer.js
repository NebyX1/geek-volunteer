import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="mt-5 p-4">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          {[
            { Icon: BsFacebook, to: '/' },
            { Icon: BsInstagram, to: '/' },
            { Icon: BsYoutube, to: '/' },
            { Icon: BsLinkedin, to: '/' },
            { Icon: BsTwitter, to: '/' },
          ].map(({ Icon, to }, index) => (
            <div key={index} className="mx-3 my-1">
              <Link className="social-icon" to={to}>
                <Icon size={20} />
              </Link>
            </div>
          ))}
        </div>

        <div className="col-12 mt-4 d-flex flex-wrap justify-content-center">
          {[
            { text: 'Privacidad', to: '/' },
            { text: 'Legal', to: '/' },
            { text: 'Contacto', to: '/' },
            { text: 'Noticias', to: '/' },
            { text: 'Donar', to: '/' },
          ].map(({ text, to }, index) => (
            <div key={index} className="nav-item mx-3 my-1">
              <Link className="nav-link custom-nav-link" to={to}>
                {text}
              </Link>
            </div>
          ))}
        </div>

        <div className="col-12 text-center mt-4">
          <h6 className="copyright">
            © {new Date().getFullYear()} - <span>GeekVolunteers</span>
          </h6>
        </div>
      </div>
    </div>
  </footer>
  );
}
