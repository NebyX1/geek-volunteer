import React from "react";

export const InfoActionBoxes = () => {
  return (
    <section>
      <div className="container-box mt-2 mb-2">
        <div className="infoBox1 me-1 p-2 text-wrap d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-white text-center mb-md-0 responsive-text">
          ¿Tenés una buena idea social y necesitás ayuda Geek?
          </h1>
          <button className="buttonDonate rounded-5 border-0 mb-2 mt-2">
            Participar!
          </button>
        </div>
        <div className="infoBox2 ms-1 p-2 text-wrap d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-white text-center mb-md-0 responsive-text">
          ¿Querés hacer voluntariado pero no tenés formación?
          </h1>
          <button className="buttonDonate rounded-5 border-0 mb-2 mt-2">
            +Info!
          </button>
        </div>
      </div>
    </section>
  );
};
