import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaRegClock, FaCheckCircle } from 'react-icons/fa'; // Using icons for better design
import './about.css'

const AboutUs = () => {
  return (
    <section className="about-us py-5 bg-light">
      <div className="container">
        {/* Heading Section */}
        <h2 className="text-center mb-4 text-primary">Despre Noi</h2>
        
        <div className="row justify-content-center">
          {/* Left Content (Description) */}
          <div className="col-lg-8 mb-5">
            <p className="lead text-muted">
              AutoSprinter este unica parcare de microbuse de tip Sprinter din Republica Moldova, oferind în stoc
              peste 120 de automobile. Suntem specializați în importul și vânzarea de microbuze și vehicule comerciale
              de înaltă calitate, provenind din Uniunea Europeană. Scopul nostru este să oferim o experiență de achiziție
              fără probleme și să ne asigurăm că fiecare client găsește mașina potrivită pentru nevoile sale.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="col-lg-2 mb-5">
            <img 
              src="/img/iconA.png"
              alt="About Us" 
              className="img-fluid rounded "
            />
          </div>
        </div>

        {/* Service Section */}
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h3 className="mb-3 text-primary">
              <FaCheckCircle className="me-2" />
              ÎNTREȚINERE ȘI GARANȚIE
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🚗 Recent importat din UE fără parcurs în RM.</li>
              <li className="list-group-item">⚙️ Kilometraj original (se acceptă orice verificare și control).</li>
              <li className="list-group-item">🔧 Mașină într-o stare foarte bună fără a necesita careva investiții.</li>
            </ul>
          </div>

          {/* Customer Advantages Section */}
          <div className="col-lg-12 mb-4">
            <h3 className="mb-3 text-primary">
              <FaCheckCircle className="me-2" />
              Avantaje Client
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">📦 Automobilul disponibil în stoc.</li>
              <li className="list-group-item">🛣️ Test-drive disponibil.</li>
              <li className="list-group-item">🔍 Orice tip de control tehnic la cerere.</li>
              <li className="list-group-item">💳 Finanțare în sistem leasing sau credit.</li>
              <li className="list-group-item">💰 Prima rată începând de la 15%.</li>
            </ul>
          </div>

          {/* Buying Options Section */}
          <div className="col-lg-12 mb-4">
            <h3 className="mb-3 text-primary">
              <FaCheckCircle className="me-2" />
              Posibilități de Cumpărare
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">💳 Leasing (doar cu buletinul de identitate).</li>
              <li className="list-group-item">💵 Numerar (posibilitatea de a achita prin transfer bancar).</li>
              <li className="list-group-item">💵 Cash.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-12 mb-4">
            <h3 className="mb-3 text-primary">
              <FaPhone className="me-2" />
              Cum Să Ne Contactați
            </h3>
            <p>
              În caz că nu ați găsit autoturismul dorit pe stoc, autoturismele disponibile sunt și la comandă. Vă oferim
              consultanță pe parcursul procesului de achiziție. Pentru mai multe detalii, vă rugăm să ne contactați
              telefonic sau pe Viber, WhatsApp:
            </p>
            <p className="fw-bold">
              <strong>Telefon:</strong> 069191783
            </p>
          </div>

          {/* Location */}
          <div className="col-lg-12 mb-4">
            <h3 className="mb-3 text-primary">
              <FaMapMarkerAlt className="me-2" />
              Adresa noastră
            </h3>
            <p>
              Adresa lotului de parcare: Strada Mateevici, Stăuceni, Republica Moldova.
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/cf5dbbirZxRu3i1V8?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn_abt"
              >
                Poziționare pe hartă
              </a>
            </p>
          </div>

          {/* Working Hours */}
          <div className="col-lg-12 mb-4">
            <h3 className="mb-3 text-primary">
              <FaRegClock className="me-2" />
              Program de lucru
            </h3>
            <p>
              <strong>Luni-Vineri:</strong> 8:30 - 18:00
              <br />
              <strong>Sâmbătă-Duminică:</strong> 10:00 - 14:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
