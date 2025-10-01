import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets.js";
import Loader from "../components/Loader.jsx";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="back" className="rotate-180 opacity-65" />
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Car Images Section */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-auto md:max-h-96 object-cover rounded-xl mb-6 shadow-md"
          />
        </div>

        {/* Right: Car Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            {car.brand} {car.model}
          </h1>
          <p className="text-gray-500 text-lg">
            {car.category} • {car.year}
          </p>

          <hr className="border-borderColor my-6" />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: assets.users_icon, text: `${car.seatingCapacity} Seats` },
              { icon: assets.fuel_icon, text: `${car.fuel_type}` },
              { icon: assets.car_icon, text: `${car.transmission}` },
              { icon: assets.location_icon, text: `${car.location}` },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-light p-4 rounded-lg"
              >
                <img src={item.icon} alt="" className="h-5 mb-2" />
                {item.text}
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h1 className="text-xl font-medium mb-3">Description</h1>
            <p className="text-gray-500">{car.description}</p>
          </div>

          {/* Features */}
          <div>
            <h1 className="text-xl font-medium mb-3">Features</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "360 Camera",
                "Bluetooth",
                "GPS",
                "Heated Seats",
                "Rear View Mirror",
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="check" className="h-4 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Section (empty for now) */}
          <form></form>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
