import { useEffect } from 'react';

function GoogleAnalitic() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8EQBSDZC0J';

    // Insert script into the DOM
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-8EQBSDZC0J');

    // Clean up script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

export default GoogleAnalitic;