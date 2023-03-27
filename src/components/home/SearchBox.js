import React from "react";

export const SearchBox = () => {
  return (
<section className="div-color p-3 d-flex justify-content-center">
  <div className="search-box-sizing">
    <form className="d-flex flex-column" style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
      <input
      style={{height: "5vh"}}
        type="text"
        className="form-control mt-2 rounded-5 border-0"
        id="search-text-box"
        aria-describedby="searchInputBox"
        placeholder="Ingrese lo que desea buscar"
      />
      <button type="submit" className="mt-2 rounded-5 border-0 buttonSubmit">
        Buscar
      </button>
    </form>
  </div>
</section>
  );
};
