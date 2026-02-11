import { Car, CircleDollarSign, PhoneCall, ShieldCheck } from 'lucide-react';
import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { IoHandLeftSharp } from 'react-icons/io5';

const WhyRent = () => {
  return (
    <div>
      <div>
        <section className="py-16 bg-linear-to-r from-indigo-900 via-purple-300 to-pink-900 hover:scale-105 transition-transform duration-200">
          <div className="max-w-6xl mx-auto px-4 text-center hover:scale-105 transition-transform duration-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Rent With Us
            </h2>
            <p className="text-gray-600 mb-10">
              We offer the best car rental experience with affordable prices and
              trusted service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-purple-200 rounded-xl shadow relative">
                <h3 className="font-semibold text-lg mb-2">
                  Affordable Prices
                </h3>
                <p className="absolute right-15 top-6">
                  {" "}
                  <CircleDollarSign />
                </p>
                <p className="text-gray-500">
                  No hidden fees, best local deals.
                </p>
              </div>
              <div className="p-6 bg-purple-200 rounded-xl shadow relative">
                <h3 className="font-semibold text-lg mb-2">
                  Well-Maintained Vehicles
                </h3>
                <p className="absolute left-10 top-7">
                  <FaScrewdriverWrench />{" "}
                </p>
                <p className="text-gray-500">
                  Regularly serviced, clean, and safety-checked cars.
                </p>
              </div>

              <div className="p-6 bg-purple-200 rounded-xl shadow relative">
                <h3 className="font-semibold text-lg mb-2">
                  Flexible Pickup & Drop-off
                </h3>
                <p className="absolute left-10 top-7">
                  <IoHandLeftSharp />
                </p>

                <p className="text-gray-500">
                  Convenient locations and flexible timing.
                </p>
              </div>

              <div className="p-6 bg-purple-200 rounded-xl shadow relative">
                <h3 className="font-semibold text-lg mb-2">
                  Trusted Local Service
                </h3>
                <p className="absolute left-10 top-7">
                  {" "}
                  <ShieldCheck />
                </p>
                <p className="text-gray-500">
                  A local company focused on trust and customer satisfaction.
                </p>
              </div>

              <div className="p-6 bg-purple-200 rounded-xl shadow relative">
                <h3 className="font-semibold text-lg mb-2">
                  Wide Range of Cars
                </h3>
                <p className="absolute left-15 top-7">
                  {" "}
                  <FaCarSide />
                </p>
                <p className="text-gray-500">
                  Economy, family, and luxury options.
                </p>
              </div>

              <div className="p-6 bg-purple-200 rounded-xl shadow relative">
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="absolute left-20 top-7">
                  {" "}
                  <PhoneCall />
                </p>
                <p className="text-gray-500">
                  We are here whenever you need help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyRent;