import React from 'react'
import polera from '../assets/polera.png'
import polo from '../assets/polo.png'
import mangalarga from '../assets/mangalarga.png'

function Categorias() {
    return (
        <section
            className="flex justify-around mt-24  text-center font-bold"
        >
            <div className="flex flex-wrap md:flex-row justify-around gap-12">
                <div className="flex flex-col">
                    <img src={polera} className="h-52" alt="" />
                    <p>OPTION-ONE</p>
                </div>
                <div className="flex flex-col">
                    <img src={polo} className="h-52" alt="" />
                    <p>OPTION-TWO</p>
                </div>
                <div className="flex flex-col">
                    <img src={mangalarga} className="h-52" alt="" />
                    <p>OPTION-TREE</p>
                </div>
            </div>
        </section>
    )
}

export default Categorias
