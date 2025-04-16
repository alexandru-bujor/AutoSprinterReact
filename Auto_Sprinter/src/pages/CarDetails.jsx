import React, { useState, useEffect } from 'react';
import './CarDetail.css';
import { Link } from 'react-router-dom'; // For linking to similar cars

const CarDetails = ({ car, cars }) => {
  if (!car) {
    return <div>Loading...</div>;
  }

  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle clicking on a gallery image
  const handleGalleryImageClick = (index) => {
    setCurrentIndex(index); // Set the clicked image as the current image
  };

  // Function to go to the next image
  const handleNextImage = () => {
    if (currentIndex < car.images?.length - 1) {
      setCurrentIndex(currentIndex + 1); // Increment index
    }
  };

  // Function to go to the previous image
  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Decrement index
    }
  };

  // Function to get similar cars
  const getSimilarCars = () => {
    return cars
        .filter((otherCar) => {
      return (

          otherCar.year === car.year, // Same year (optional)
          otherCar.model === car.model,
          ((otherCar.price - car.price <= 1000) & (otherCar.price - car.price > 0)) || ((otherCar.price - car.price < 0)&(otherCar.price - car.price >= -1000))
      );
    }).slice(0, 3)
  };

  // Get similar cars
  const similarCars = getSimilarCars();

  return (
      <div className="container car-page">
        {/* Left Column */}
        <div className="left-col">
          <div className="main-image-container">
            {/* Main Image */}
            <img
                src={`./foto_auto/${car.slug}/${car.images?.[currentIndex]}`}
                alt={car.model}
                className="main-image"
            />

            {/* Navigation Arrows */}
            <button
                onClick={handlePreviousImage}
                disabled={currentIndex === 0}
                className="nav-arrow prev-arrow"
            >
              &#8249;
            </button>
            <button
                onClick={handleNextImage}
                disabled={currentIndex === car.images?.length - 1}
                className="nav-arrow next-arrow"
            >
              &#8250;
            </button>
          </div>

          {/* Gallery */}
          <div className="gallery">
            {car.images?.slice(0, 10).map((img, index) => (
                <img
                    key={index}
                    src={`foto_auto/${car.slug}/${img}`}
                    alt={`Additional image ${index + 1}`}
                    onClick={() => handleGalleryImageClick(index)} // Set the clicked image as the main image
                    className="gallery-image"
                />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-col">
          <h2>
            <strong>{car.make} {car.model} {car.year}</strong>
          </h2>
          <div className="tabs">
            <button className="active">Specificații</button>
          </div>

          {/* Car Details */}
          <div className="car-detail-item"><strong>Marcă</strong><span>{car.make}</span></div>
          <div className="car-detail-item"><strong>Model</strong><span>{car.model}</span></div>
          <div className="car-detail-item"><strong>Înmatriculare</strong><span>{car.registration}</span></div>
          <div className="car-detail-item"><strong>An de fabricație</strong><span>{car.year}</span></div>
          <div className="car-detail-item"><strong>Rulaj</strong><span>{car.mileage}</span></div>
          <div className="car-detail-item"><strong>Capacitate cilindrică</strong><span>{car.engine_capacity}</span></div>
          <div className="car-detail-item"><strong>Tip combustibil</strong><span>{car.fuel}</span></div>
          <div className="car-detail-item"><strong>Cutie de viteze</strong><span>{car.transmission}</span></div>
          <div className="car-detail-item"><strong>Tip tracțiune</strong><span>{car.drive_type}</span></div>
          <div className="car-detail-item"><strong>Culoare</strong><span>{car.color}</span></div>
          <div className="car-detail-item"><strong>Capacitate de încărcare</strong><span>{car.load_max}</span></div>
          <div className="car-detail-item"><strong>Masă totală</strong><span>{car.total_weight} kg</span></div>

          {/* Price */}
          <div className="price">{car.price} €</div>

          <button className="btn btn-outline-primary back-btn" onClick={() => window.history.back()}>
            Înapoi la Catalog
          </button>

          {/* Second Button: Call a specific number */}
          <button className="btn btn-outline-call back-btn" onClick={() => window.location.href = `tel:069191783`}>
            Sună pentru detalii
          </button>

          {/* Third Button: View car on 999.md */}
          <button className="btn btn-outline-view back-btn" onClick={() => window.open(`https://999.md/${car.slug}`, '_blank')}>
            Vezi pe 999.md
          </button>


          {/* Similar Cars Section */}
          {similarCars.length > 0 && (
              <div className="similar-cars-section mt-5">
                <h3>Vehicule similare</h3>
                <div className="row">
                  {similarCars.map((similarCar) => (
                      <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={similarCar.id}>
                        <article className="product" data-id={similarCar.id}>
                          <a className="title-prod text-decoration-none" href={`/cars/${similarCar.slug}`}>
                            <figure className="position-relative">
                              <img
                                  className="img img-fluid rounded"
                                  src={`foto_auto/${similarCar.slug}/${similarCar.images?.[0]}`}
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
                                <div className="xprice fw-bold fs-5 ">{similarCar.price} €</div>
                              </div>
                            </div>
                          </a>
                        </article>
                      </div>
                  ))}
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default CarDetails;
