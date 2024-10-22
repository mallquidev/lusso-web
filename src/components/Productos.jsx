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



import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const products = [
    {
        title: "Dress Yourself",
        subtitle: "BE UNIQUE",
        description: "Discover the Essentials for this Season.",
        img: [hondablack, hondawhite],
    },
    {
        title: "Dress Yourself",
        subtitle: "BE UNIQUE",
        description: "Discover the Essentials for this Season.",
        img: [volksblack, volksWhite],
    },
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [unon, unob],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [dosn, dosb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [tresn, tresb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [cuatron, cuatrob],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [cincon, cincob],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [seisn, seisb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [sieten],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [ochon, ochob],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [nueven, nueveb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [diezn, diezb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [once],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [docen, doceb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [trecen, treceb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [catorcen, catorceb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [quincen, quinceb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [an, ab],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [bn, bb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [cn, cb],},
    {title: "Dress Yourself", subtitle: "BE UNIQUE", description: "Discover the Essentials for this Season.", img: [dn, db],},
];

const Productos = () => {
    return (
        <section id='producto' className="flex justify-center items-center mb-10">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div className="w-60 md:w-1/2">
                            <ImageGallery items={product.img.map(image => ({original: image}))} showPlayButton={false} showThumbnail={false} showBullets={true} showNav={false} showFullscreenButton={false}/>
                        </div>
                        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center">
                            <p className="text-[#797979] md:text-3xl">{product.subtitle}</p>
                            <p className="text-3xl font-bold">{product.title}</p>
                            <p className="mt-4 text-sm text-center">{product.description}</p>
                            <button className="border mt-4 border-b-black bg-black text-sm font-bold px-4 py-2 text-white border-b-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                                SHOW NOW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Productos;
