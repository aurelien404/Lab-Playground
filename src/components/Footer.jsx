import { useTranslation } from 'react-i18next';



function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="info-footer">
        <h1>aurelienj.</h1>
        <br />
        <nav className='navFooter'>
          <a className='link-style' href="#">Services</a>
          <a className='link-style' href="#">Contact</a>
          <a className='link-style' href="#">{t('pdc')}</a>
          <a className='link-style' href="#">{t('sitemap')}</a>
        </nav>
        <br />
        <nav className='logoFooter'>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.303 3.492.997.108-.776.42-1.303.762-1.603-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.125-.303-.535-1.524.115-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.004 2.046.138 3.003.404 2.29-1.552 3.293-1.23 3.293-1.23.653 1.653.243 2.874.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.806 5.624-5.48 5.92.432.373.816 1.103.816 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.577C20.565 22.295 24 17.796 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
          </a>

          <a href="https://www.youtube.com/ton-chaine" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a2.956 2.956 0 0 0-2.081-2.081C19.623 3.5 12 3.5 12 3.5s-7.623 0-9.417.605a2.956 2.956 0 0 0-2.081 2.081C0 7.982 0 12 0 12s0 4.018.502 5.814a2.956 2.956 0 0 0 2.081 2.081C4.377 20.5 12 20.5 12 20.5s7.623 0 9.417-.605a2.956 2.956 0 0 0 2.081-2.081C24 16.018 24 12 24 12s0-4.018-.502-5.814zM9.75 15.02V8.98l6 3.02-6 3.02z" />
            </svg>
          </a>
        </nav>



      </div>
      <div className="bottom-footer">
        <a>©{t('CopyR')} 2025</a>
        <a href="mailto:contact@aurelienj.ch" className='link-style'>contact@aurelienj.ch</a>
      </div>
    </footer>
  );
}

export default Footer;
