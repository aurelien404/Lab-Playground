import { Link, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



function Footer() {
    const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="info-footer">
        </div>
        <div className="bottom-footer">
            <a>©{t('CopyR')} 2025</a>
            <a href="mailto:contact@aurelienj.ch" className='link-style'>contact@aurelienj.ch</a>
        </div>
    </footer>
  );
}

export default Footer;
