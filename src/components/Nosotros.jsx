import React from 'react';
import modelo from '../assets/modelo.png';

function Nosotros() {
    return (
        <div id='nosotros' className="bg-[#000] h-[700px]  flex items-center justify-center flex-col md:flex-row">
            <div className="mt-36 text-center md:text-left mb-20 z-50">
                <div className="flex flex-col ">
                    <p className="text-white text-7xl md:text-8xl font-light md:ml-24 ml-0">DRIFT</p>
                    <p className="text-white text-7xl md:text-8xl font-bold mx-5">LUSSO</p>
                    <div>
                        <p className="mt-10 text-sm md:text-base mx-5 text-white">
                            Descubre la verdadera declaración de estilo con diseños que cuentan una historia. <br />
                            Cada traje está diseñado para ofrecerte el equilibrio perfecto entre confort, <br />
                            calidad y estilo... Inspirados en la energía de los carros... <br />
                            <b>TE ASEGURAMOS QUE DESTACARÁS EN CUALQUIER OCASIÓN</b>
                            <br />
                            <br />
                        </p>
                        <br />
                        <a href='#producto' className="mt-7 mx-5 bg-white text-black p-3 px-7 transition-colors duration-300 ease-in-out hover:bg-gray-400"
                            onClick={() => {
                                document.getElementById('producto').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            COMPRA AHORA
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex md:relative absolute  items-center mt-10 md:mt-0 md:w-[700px]">
                <img src={modelo} alt="Modelo" className="w-full object-cover opacity-70 md:opacity-100 md:w-[700px]" />
            </div>
        </div>
    );
}

export default Nosotros;
