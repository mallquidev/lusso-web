import React from 'react';
import modelo from '../assets/modelo.png';

function Nosotros() {
    return (
        <div id='nosotros' className="bg-[#F2F1EF] h-[90vh]  flex items-center justify-center flex-col md:flex-row">
            <div className="mt-36 text-center md:text-left mb-20 z-50">
                <div className="flex flex-col">
                    <p className="text-black text-7xl md:text-8xl font-light md:ml-24 ml-0">WE ARE</p>
                    <p className="text-black text-7xl md:text-8xl font-bold">DENIM</p>
                    <div>
                        <p className="mt-10 font-bold text-lg md:text-base">
                            Your new look is just a click away. With our new jeans collection you <br />
                            will look stunning.
                        </p>
                        <button className="mt-7 bg-black text-white p-3 px-7 transition-colors duration-300 ease-in-out hover:bg-gray-800">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex md:relative absolute  items-center mt-10 md:mt-0 md:w-[700px]">
                <img src={modelo} alt="Modelo" className="border w-full object-cover opacity-70 md:opacity-100 md:w-[700px]" />
            </div>
        </div>
    );
}

export default Nosotros;
