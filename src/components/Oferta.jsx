import React from 'react'
import modelo1 from '../assets/modelo1.png'
import modelo2 from '../assets/modelo2.png'

function Oferta() {
    return (
        <section class="mt-24 mx-28">
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="flex flex-wrap justify-center gap-2">
                    <div class="flex h-72 md:h-96 w-48 md:w-64 ">
                        <img src={modelo1} alt="" class="object-cover h-full w-full" />
                    </div>
                    <div class="flex h-72 md:h-96 w-48 md:w-64">
                        <img src={modelo2} alt="" class="object-cover h-full w-full" />
                    </div>
                </div>
                <div class="mt-10 md:mt-0 md:ml-10 text-center md:text-left">
                    <p class="text-5xl md:text-6xl text-gray-600 font-light">NEW</p>
                    <p class="text-5xl md:text-6xl font-bold">COLLECTION</p>
                    <div class="mt-5">
                        <p class="font-bold text-xs md:text-sm">YOUR HUNT FOR THE PERFECT JEANS ENDS HERE</p>
                    </div>
                    <button class="mt-7 bg-black text-white p-3 px-5 transition-colors duration-300 ease-in-out hover:bg-gray-800">Shop Now</button>
                </div>
            </div>
        </section>

    )
}

export default Oferta