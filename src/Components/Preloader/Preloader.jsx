import React from "react";
import '../../css/preloader.css';

const Preloader = () => {
    return (
        <section className="preloader">
          <div className="spinner">
            <span className="spinner-rotate"></span>
          </div>
        </section>
      );
};

export default Preloader;