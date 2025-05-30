import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <p>{t('heroTxt')}</p>
          <button className='heroBtn' onClick={handleScroll}>{t('hetBtn')}</button>
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
