import React from 'react';

const RecentCars = ({ cars }) => {
  return (
    <section className="recent-cars block_bg mb-3 bg-white p-3 rounded shadow-sm">
      <h2 className="title-icon mb-4">Recent adăugate</h2>
      <div className="row">
        {cars
          .slice(0, 10)
          .filter(car => car.model !== 'Unknown Model' && car.model !== null)
          .map(car => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={car.id}>
              <article className="product" data-id={car.id}>
                <a className="title-prod text-decoration-none" href={`/cars/${car.slug}`}>
                  <figure className="position-relative">
                    <img
                      className="img img-fluid rounded"
                      src={`cars/foto_auto/${car.slug}/${car.images?.[0]}`}
                      alt={car.title}
                    />

                    <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="brazzers d-flex gap-2">
                        {car.alt_images?.map((img, idx) => (
                          <div key={idx} className="brazzers_button" data-alt-src={img}></div>
                        ))}
                      </div>
                    </div>
                  </figure>

                  <div className="prod_text mt-2">
                    <h3 className="txs">{car.title}</h3>
                    <div className="char-block cl_rf d-flex justify-content-between mb-2">
                      <div className="char-item">
                        <img src="https://www.autolux.md/img/gas-station.svg" alt="Fuel" />{' '}
                        <span>{car.fuel}</span>
                      </div>
                      <div className="char-item">
                        <img src="https://www.autolux.md/img/engine.svg" alt="Engine" />{' '}
                        <span>{car.engine_capacity}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <div className="xprice fw-bold fs-5 ">{car.price} €</div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          ))}
      </div>
    </section>
  );
};

export default RecentCars;
