import React from 'react';

import hondablack from '../assets/honda-black.jpeg'
import hondawhite from '../assets/honda-white.jpeg'
import volksWhite from '../assets/volks-white.jpeg';
import volksblack from '../assets/volks-black.jpeg';

import unob from '../assets/uno-b.jpeg'
import unon from '../assets/uno-n.jpeg'
import dosn from '../assets/dos-n.jpeg'
import dosb from '../assets/dos-b.jpeg'
import tresn from '../assets/tres-n.jpeg'
import tresb from '../assets/tres-b.jpeg'
import cuatrob from '../assets/cuatro-b.jpeg'
import cuatron from '../assets/cuatro-n.jpeg'
import cincob from '../assets/cinco-b.jpeg'
import cincon from '../assets/cinco-n.jpeg'
import seisn from '../assets/seis-n.jpeg'
import seisb from '../assets/seis-b.jpeg'
import sieten from '../assets/siete-n.jpeg'
import ochob from '../assets/ocho-b.jpeg'
import ochon from '../assets/siete-n.jpeg'
import nueven from '../assets/nueve-n.jpeg'
import nueveb from '../assets/nueve-b.jpeg'
import diezb from '../assets/diez-b.jpeg'
import diezn from '../assets/diez-n.jpeg'
import once from '../assets/once.jpeg'

import doceb from '../assets/doce-b.jpeg'
import docen from '../assets/doce-n.jpeg'
import treceb from '../assets/trece-b.jpeg'
import trecen from '../assets/trece-n.jpeg'
import catorceb from '../assets/catorce-b.jpeg'
import catorcen from '../assets/catorce-n.jpeg'
import quinceb from '../assets/quince-b.jpeg'
import quincen from '../assets/quince-n.jpeg'
import ab from '../assets/a-b.jpeg'
import an from '../assets/a-n.jpeg'
import bb from '../assets/b-b.jpeg'
import bn from '../assets/b-n.jpeg'
import cb from '../assets/c-b.jpeg'
import cn from '../assets/c-n.jpeg'
import db from '../assets/d-b.jpeg'
import dn from '../assets/d-n.jpeg'

import whatsap from '../assets/whatsap.svg'


import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const products = [
    {   
        id: 1,
        title: "Dress Yourself",
        price: 45,
        subtitle: "BE UNIQUE",
        description: "Discover the Essentials for this Season.",
        img: [hondablack, hondawhite],
    },
    {
        id: 2,
        title: "Dress Yourself",
        price: 45,
        subtitle: "BE UNIQUE",
        description: "Discover the Essentials for this Season.",
        img: [volksblack, volksWhite],
    },
    { id: 3, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [unon, unob], },
    { id: 4, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [dosn, dosb], },
    { id: 5, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [tresn, tresb], },
    { id: 6, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [cuatron, cuatrob], },
    { id: 7, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [cincon, cincob], },
    { id: 8, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [seisn, seisb], },
    { id: 9, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [sieten], },
    { id: 10, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [ochon, ochob], },
    { id: 11, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [nueven, nueveb], },
    { id: 12, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [diezn, diezb], },
    { id: 13, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [once], },
    { id: 14, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [docen, doceb], },
    { id: 15, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [trecen, treceb], },
    { id: 16, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [catorcen, catorceb], },
    { id: 17, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [quincen, quinceb], },
    { id: 18, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [an, ab], },
    { id: 19, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [bn, bb], },
    { id: 20, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [cn, cb], },
    { id: 21, title: "Dress Yourself", price: 45, subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [dn, db], },
];

const Productos = () => {
    return (
        <section id='producto' className="flex justify-center items-center mb-10">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div className="w-60 md:w-1/2">
                            <ImageGallery items={product.img.map(image => ({ original: image }))} showPlayButton={false} showThumbnail={false} showBullets={true} showNav={false} showFullscreenButton={false} />
                        </div>
                        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center">
                            <p className="text-3xl font-bold">{product.title}</p>
                            <p className="text-[#797979] md:text-3xl">{product.subtitle}</p>
                            <div className="flex items-end items-center">
                                <span className="relative text-lg font-semibold text-[#11181c]">${product.price}</span>
                                <span className="relative line-through font-semibold text-[#21A0A] ml-3">$56</span>
                                
                            </div>
                            <p className="mt-4 text-sm text-center">{product.description}</p>
                            
                            <a
                                target='_blank' rel="noopener noreferrer"
                                className="flex mt-4 k bg-black text-sm font-bold px-4 py-2 text-white border-b-2 transition-colors duration-300 ease-in-out hover:bg-[#2e2e2e] hover:text-white"
                                href={`https://wa.me/+5217292818795?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20${encodeURIComponent(product.title)}`}>
                                <img src={whatsap} alt="WhatsApp" className="w-6 h-6 mr-2" />
                                Reservar
                            </a>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Productos;
