import { useState } from 'react';

function Home() {
  const handleScroll = () => {
    const target = document.getElementById("MyWork");
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top - 60, // Décalage personnalisé
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div className="heroSection">
        <div className="heroTxt">
          <p>I’m Aurelien, a freelancer specializing in creating fully responsive websites for artisans. I work with craftsmen and small businesses, offering complete digital solutions, from showcase websites to e-commerce platforms.</p>
          <button className='heroBtn' onClick={handleScroll}>
            See My Work
          </button>
        </div>
      </div>

      <div
        id="MyWork"
        className="MyWork"
        style={{ height: "100vh", backgroundColor: "lightblue" }}
      >
        <h2>Mon Travail</h2>
      </div>
    </>
  );
}

export default Home;
