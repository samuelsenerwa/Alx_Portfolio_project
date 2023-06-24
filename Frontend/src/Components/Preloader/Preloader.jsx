import React, { useEffect, useState } from "react";
import './preloader.css';

const Preloader = () => {

    //setting preloader loading time
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Simulating the delay before hiding the preloader
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
    return (
        <section className="preloader">
          <div className="spinner">
            <span className="spinner-rotate"></span>
          </div>
        </section>
      );
    }

    //return null when loading is false indicating that the preloader should be hidden

    return null;
};

export default Preloader;