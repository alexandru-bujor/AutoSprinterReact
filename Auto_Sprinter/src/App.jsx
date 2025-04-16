import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Footer from './components/footer/footer.jsx';
import Navbar from './components/navbar/navbar.jsx';
import RecentCars from './components/recent_cars/recent_cars.jsx';
import Slider from './components/slider/slider.jsx';
import CatalogPage from './pages/catalogPage.jsx';
import CarDetails from './pages/CarDetails.jsx';
import rawCarData from './detalii.json'; // New format
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from './components/about/about.jsx';

const App = () => {
  const location = useLocation();

  // 🔁 Transform raw data to match the structure your components expect
  const carData = rawCarData.map((car) => ({
    id: car.id,
    slug: car.id, // using id for URL path
    make: `${car.detalii?.General?.['Marcă'] }`,
    model: `${car.detalii?.General?.['Model'] }`,
    title: car.titlu,
    price: car.preț,
    images: car.imagini, // fill in if you add images
    alt_images: [],
    fuel: car.detalii?.Caracteristici?.['Tip combustibil'] || '',
    engine_capacity: `${car.detalii?.Caracteristici?.['Capacitate motor'] }`,
    details: car.detalii,
    transmission: `${car.detalii?.Caracteristici?.['Cutie de viteze'] }`,
    drive_type: `${car.detalii?.Caracteristici?.['Tracțiune'] }`,
    year: `${car.detalii?.Caracteristici?.['An de fabricație'] }`,
    mileage: `${car.detalii?.Caracteristici?.['Distanță parcursă'] }`,
    registration: `${car.detalii?.General?.['Înmatriculare'] }`,
    load_max: `${car.detalii?.Caracteristici?.['Capacitate de încărcare'] }`,
    total_weight: `${car.detalii?.Caracteristici?.['Masă totală (kg)'] }`,
  }));

  return (
    <div>
      <Navbar />
      <main className="container">
        {location.pathname === '/' && <Slider />}

          {location.pathname === '/' && <RecentCars cars={carData} />}
          <Routes>
            <Route path="/catalog" element={<CatalogPage cars={carData} />} />
            {carData.map((car) => (
              <Route  key={car.id}
                      path={`/cars/${car.slug}`}
                      element={<CarDetails car={car} cars={carData} />}
              />
            ))}
          </Routes>

      </main>
      <AboutUs />
      <Footer />
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
