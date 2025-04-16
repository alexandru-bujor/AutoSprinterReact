// pages/CatalogPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarDetail.css'

const CatalogPage = ({ cars }) => {
    // Filter state variables
    const [filters, setFilters] = useState({
        fuel: '',
        engineCapacity: '',
        minPrice: 0,
        maxPrice: 100000,
        yearRange: [2000, 2025],
    });

    // Handle filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Filter cars based on selected filters
    const filteredCars = cars.filter((car) => {
        const isFuelMatch = filters.fuel ? car.fuel === filters.fuel : true;
        const isEngineCapacityMatch =
            filters.engineCapacity ? car.engine_capacity === filters.engineCapacity : true;
        const isPriceMatch =
            car.price >= filters.minPrice && car.price <= filters.maxPrice;
        const isYearMatch = car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1];

        return isFuelMatch && isEngineCapacityMatch && isPriceMatch && isYearMatch;
    });

    return (
        <div className="container my-5">
            <h1 className="mb-4">
                <strong>Car Catalog </strong>
            </h1>
            <div className="row">
                {/* Filter Sidebar */}
                <div className="col-12 col-md-3">
                    <div className="filter-sidebar">
                        <h3>Filter Cars</h3>

                        {/* Fuel Type Filter */}
                        <div className="filter-item">
                            <label>Fuel Type</label>
                            <select
                                name="fuel"
                                value={filters.fuel}
                                onChange={handleFilterChange}
                                className="form-control"
                            >
                                <option value="">All</option>
                                <option value="Gasoline">Gasoline</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        {/* Engine Capacity Filter */}
                        <div className="filter-item">
                            <label>Engine Capacity</label>
                            <select
                                name="engineCapacity"
                                value={filters.engineCapacity}
                                onChange={handleFilterChange}
                                className="form-control"
                            >
                                <option value="">All</option>
                                <option value="1000">1000cc</option>
                                <option value="1500">1500cc</option>
                                <option value="2000">2000cc</option>
                                <option value="2500">2500cc</option>
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div className="filter-item">
                            <label>Price Range</label>
                            <input
                                type="range"
                                name="minPrice"
                                min="0"
                                max="100000"
                                value={filters.minPrice}
                                onChange={handleFilterChange}
                                className="form-control"
                            />
                            <input
                                type="range"
                                name="maxPrice"
                                min="0"
                                max="100000"
                                value={filters.maxPrice}
                                onChange={handleFilterChange}
                                className="form-control"
                            />
                            <div>
                                <span>Min Price: {filters.minPrice} €</span>
                                <span>Max Price: {filters.maxPrice} €</span>
                            </div>
                        </div>

                        {/* Year Range Filter */}
                        <div className="filter-item">
                            <label>Year Range</label>
                            <input
                                type="range"
                                name="yearRange"
                                min="2000"
                                max="2025"
                                value={filters.yearRange[0]}
                                onChange={(e) => setFilters({ ...filters, yearRange: [e.target.value, filters.yearRange[1]] })}
                                className="form-control"
                            />
                            <input
                                type="range"
                                name="yearRange"
                                min="2000"
                                max="2025"
                                value={filters.yearRange[1]}
                                onChange={(e) => setFilters({ ...filters, yearRange: [filters.yearRange[0], e.target.value] })}
                                className="form-control"
                            />
                            <div>
                                <span>Year Range: {filters.yearRange[0]} - {filters.yearRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Car Listings */}
                <div className="col-12 col-md-9">
                    <div className="row g-4">
                        {filteredCars.map((car) => (
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
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
