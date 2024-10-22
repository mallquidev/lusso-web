import React from 'react'

function Footer() {
    return (
        <footer id='contacto'  className="bg-black text-white py-6 text-sm">
            <div className="container mx-auto text-center">
                <p className="mb-2">© 2024 Lusso Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-gray-400">Inicio</a>
                    <a href="#" className="hover:text-gray-400">Servicios</a>
                    <a href="#" className="hover:text-gray-400">Contacto</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
