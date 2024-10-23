import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Producto');
    const [circlePosition, setCirclePosition] = useState({ left: 0, top: 0 });

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false); // Cerrar el menú al hacer clic
    };

    // Función para manejar el scroll y actualizar el enlace activo
    const handleScroll = () => {
        const sections = ['producto', 'nosotros', 'contacto'];
        let currentSection = '';

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                }
            }
        });

        if (currentSection) {
            setActiveLink(currentSection.charAt(0).toUpperCase() + currentSection.slice(1)); // Actualiza el enlace activo
        }
    };

    // Escuchar el evento de scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Actualizar la posición del círculo al cambiar el enlace activo
    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            if (link.innerText === activeLink) {
                const rect = link.getBoundingClientRect();
                setCirclePosition({ left: rect.left + rect.width / 2 - 10, top: rect.bottom + window.scrollY + 10 }); // Ajustar el círculo
            }
        });
    }, [activeLink, isOpen]);

    return (
        <header className="flex flex-wrap h-14 md:mx-28 items-center justify-around">
            <div className="flex-1 text-center">
                <h1 className="font-bold text-lg text-left p-4">LUSSO</h1>
            </div>
            <div className="md:flex  hidden justify-end flex-1 gap-5 text-lg ">
                <a href="#producto" className="font-light">Producto</a>
                <a href="#nosotros" className="font-light">Nosotros</a>
                <a href="#contacto" className="font-light">Contacto</a>
            </div>

            <div onClick={toggleMenu} className="cursor-pointer p-4 block  md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
            </div>
            <nav style={{ zIndex: 9999 }} className={`fixed block md:hidden top-0 right-0 h-screen w-3/4 z-50 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 100 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center mt-10 space-y-5"
                >
                    {/* Botón de Cierre */}
                    <motion.div
                        className="absolute top-5 right-5 cursor-pointer"
                        onClick={toggleMenu}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.div>
                    <div className="relative">
                        <motion.span
                            className="absolute rounded-full bg-black w-2 h-2 transition-all duration-300"
                            style={{ left: circlePosition.left, top: circlePosition.top }}
                        />
                    </div>
                    <a
                        href="#nosotros"
                        className={`nav-link font-light text-lg ${activeLink === 'Nosotros' ? 'text-black font-bold' : 'text-gray-600'}`}
                        onClick={() => handleLinkClick('Nosotros')}
                    >
                        Nosotros
                    </a>
                    <a
                        href="#producto"
                        className={`nav-link md:font-light md:text-lg text-2xl flex gap-2 ${activeLink === 'Producto' ? 'text-black font-bold' : 'text-gray-600'}`}
                        onClick={() => handleLinkClick('Producto')}
                    >
                        <span className='w-7 h-7 rounded-full bg-black flex'></span>
                        Producto
                    </a>
                    <a
                        href="#contacto"
                        className={`nav-link font-light text-lg ${activeLink === 'Contacto' ? 'text-black font-bold' : 'text-gray-600'}`}
                        onClick={() => handleLinkClick('Contacto')}
                    >
                        Contacto
                    </a>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;
