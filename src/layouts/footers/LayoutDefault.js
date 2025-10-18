import Link from "next/link";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useRouter } from 'next/router';
import { useState } from 'react';

const DefaultFooter = ( { extraClass } ) => {
  const { asPath } = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // REEMPLAZA 'xvoyqyev' CON TU FORM ID DE FORMSPREE
      const response = await fetch('https://formspree.io/f/mrbyjvqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: '🚀 NUEVO SUSCRIPTOR - Midnight Studios',
          _replyto: email,
          message: `Nuevo suscriptor: ${email}\n\nFecha: ${new Date().toLocaleString('es-PE')}`,
        }),
      });

      if (response.ok) {
        setMessage('¡Gracias por suscribirte! Te contactaremos pronto.');
        setEmail('');
      } else {
        setMessage('Error al suscribirse. Intenta nuevamente.');
      }
    } catch (error) {
      setMessage('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* footer */}
      <footer className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-60">
            <div className="row justify-content-between">
              <div className="col-md-4 col-lg-4 mil-mb-60">

                <div className="mil-muted mil-logo mil-up mil-mb-30">{AppData.footer.logo.text}</div>

                <p className="mil-light-soft mil-up mil-mb-30">No te pierdas nuestras novedades:</p>

                {/* FORMULARIO ACTUALIZADO - SOLO ESTA PARTE CAMBIA */}
                <form onSubmit={handleSubmit} className="mil-subscribe-form mil-up">
                  <input 
                    type="email" 
                    placeholder="Ingresa tu correo" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="mil-button mil-icon-button-sm mil-arrow-place"
                    disabled={isLoading}
                  >
                    {isLoading ? '...' : <ArrowIcon />}
                  </button>
                </form>

                {message && (
                  <p className="mil-light-soft mil-up mil-mt-10 mil-small" style={{color: message.includes('Gracias') ? '#90EE90' : '#FF6B6B'}}>
                    {message}
                  </p>
                )}

              </div>
              <div className="col-md-7 col-lg-6">
                <div className="row justify-content-end">
                  <div className="col-md-6 col-lg-7">

                    <nav className="mil-footer-menu mil-mb-60">
                      <ul>
                        {AppData.footer.menu.map((item, key) => (
                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active mil-up" : "mil-up"}>
                          <Link href={item.link}>{item.label}</Link>
                        </li>
                        ))}
                      </ul>
                    </nav>

                  </div>
                  <div className="col-md-6 col-lg-5">

                    <ul className="mil-menu-list mil-up mil-mb-60">
                      <li><a href="#." className="mil-light-soft">Política de privacidad</a></li>
                      <li><a href="#." className="mil-light-soft">Términos y condiciones</a></li>
                      <li><a href="#." className="mil-light-soft">Política de cookies</a></li>
                      <li><a href="#." className="mil-light-soft">Alianzas Regionales</a></li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-between flex-sm-row-reverse">
              <div className="col-md-7 col-lg-6">

                <div className="row justify-content-between">

                  <div className="col-md-6 col-lg-5 mil-mb-60">

                    <h6 className="mil-muted mil-up mil-mb-30">Cercado de Lima</h6>

                    <p className="mil-light-soft mil-up">Calle Teniente Carlos Moore 1412<span className="mil-no-wrap"> Los Cipreses</span></p>

                  </div>
                  <div className="col-md-6 col-lg-5 mil-mb-60">

                    <h6 className="mil-muted mil-up mil-mb-30">Contacto</h6>

                    <p className="mil-light-soft mil-up">info@midnightstudios.com.pe <span className="mil-no-wrap">+51 960196221</span></p>

                  </div>
                </div>

              </div>
              <div className="col-md-4 col-lg-6 mil-mb-60">

                <div className="mil-vert-between">
                  <div className="mil-mb-30">
                    <ul className="mil-social-icons mil-up">
                      {AppData.social.map((item, key) => (
                      <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" className="social-icon"><i className={item.icon} /></a></li>
                      ))}
                    </ul>
                  </div>
                  <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;