import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer'>
              <div className='dev'>
                 <h1>Developpeur</h1>
                 <p><i className="fa-brands fa-github"></i> Salif Moctar Konate</p>
                 <p><i className="fa-solid fa-laptop"></i> SemckDev</p>
              </div>
              <div className='sociaux'>
                 <h1>Sociaux</h1>
                 <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                 <p><i className="fa-brands fa-twitter"></i> twitter</p>
                 <p><i className="fa-brands fa-facebook-f"></i> Facebook</p>
                 <p><i className="fa-brands fa-tiktok"></i> tiktok</p>
                 <p><i className="fa-brands fa-whatsapp"></i> whatsapp</p>
              </div>
              <div className='service'>
                 <h1>Services</h1>
                 <p></p>
                 <p></p>
                 <p></p>
              </div>
              <div className='size'>
                 <h1>Size</h1>
                 <p><i className="fa-solid fa-location-dot"></i> Attbougou 320 logements</p>
              </div>
             </div>
        </>
    );
};

export default Footer;