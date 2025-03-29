import React, { useState } from "react";
import berrycake from "../assets/berrycake.jpg";
import cheesecakecaram from "../assets/cheesecakecaram.png";
import chocolate from "../assets/chocolate.jpg";
import dessert2 from "../assets/dessert2.jpg";
import pancakes from "../assets/pancakes.jpg";
import strawberries from "../assets/strawberries.jpg";
import pie from "../assets/pie.jpg";
import cupcakes from "../assets/cupcakes.jpg";
import sweets from "../assets/sweets.jpg";
import strawberryeclair from "../assets/strawberryeclair.jpg";
import cake from "../assets/cake.jpg";

const menuItems = [
  { name: "Pies", price: 15.0, image1: berrycake, image2: chocolate, image3: pancakes },
  { name: "Bread", price: 10.0, image1: cupcakes, image2: pie },
  {
    name: "Sugar",
    price: 50.0,
    image1: strawberries,
    image2: cheesecakecaram,
  },
  {
    name: "Others",
    price: 20.0,
    image1: sweets,
    image2: strawberryeclair,
    image3: dessert2,
  },
];

const Om = () => {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col md:flex-col lg:flex-row items-center gap-8">
      {/* Left Sidebar */}
      <div className="w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-pink-300">
        <h1 className="text-3xl md:text-4xl font-roboto text-red-600 mb-4 uppercase text-center">
          Our Menu
        </h1>
        <p className="text-base md:text-lg font-roboto text-red-700 italic mb-4 md:mb-6 text-center">
          Deliciously fresh <br /> Always from Scratch!
        </p>

        <div className="space-y-3 md:space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`flex items-center justify-between w-full p-2 md:p-3 rounded-2xl transition-all duration-300 ${
                selectedItem.name === item.name
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-800 border border-red-300"
              } hover:bg-pink-500 hover:text-white shadow-md`}
            >
              {/* Icon and Name */}
              <div
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${
                  selectedItem.name === item.name
                    ? "from-red-400 to-pink-500 border-4 border-white shadow-lg scale-105"
                    : "from-gray-200 to-gray-300 border-2 border-transparent"
                } text-white shadow-md transition-all duration-300 transform hover:scale-110`}
              >
                <span className="text-xs md:text-sm font-bold">{item.name}</span>
              </div>

              {/* Price */}
              <span className="text-sm md:text-base font-semibold">
                ${item.price.toFixed(2)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-3/4 flex flex-col items-center">
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Image 1 */}
          <div className="p-2 md:p-4 rounded-3xl">
            <img
              src={selectedItem.image1}
              alt={`${selectedItem.name} Image 1`}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Image 2 */}
          <div className="p-2 md:p-4 rounded-3xl">
            <img
              src={selectedItem.image2}
              alt={`${selectedItem.name} Image 2`}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Image 3 */}
          {selectedItem.image3 && (
            <div className="p-2 md:p-4 rounded-3xl">
              <img
                src={selectedItem.image3}
                alt={`${selectedItem.name} Image 3`}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 md:mt-6 flex gap-3 md:gap-4 lg:gap-6">
          {/* Previous Button */}
          <button
            onClick={() => {
              const currentIndex = menuItems.findIndex(
                (item) => item.name === selectedItem.name
              );
              setSelectedItem(
                menuItems[
                  (currentIndex - 1 + menuItems.length) % menuItems.length
                ]
              );
            }}
            className="p-2 md:p-3 bg-red-600 text-white rounded-full shadow-lg"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={() => {
              const currentIndex = menuItems.findIndex(
                (item) => item.name === selectedItem.name
              );
              setSelectedItem(
                menuItems[(currentIndex + 1) % menuItems.length]
              );
            }}
            className="p-2 md:p-3 bg-red-600 text-white rounded-full shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Om;