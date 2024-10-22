import React from 'react';

const MySection = ({ img, title, subtitle, description }) => {
    return (
        <section className="mb-24 flex flex-col justify-center md:flex-row items-center gap-2">
            <div>
                <img src={img} className="h-60" alt="" />
            </div>
            <div className="text-center md:text-left">
                <p className="text-[#797979] md:text-4xl">{title}</p>
                <p className="text-4xl font-bold">{subtitle}</p>
                <p className="mt-4 text-sm">{description}</p>
                <button className="border mt-4 border-b-black text-sm font-bold px-3 border-b-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
                    SHOW NOW
                </button>
            </div>
        </section>
    );
};

export default MySection;
