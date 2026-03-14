import React from 'react';
import vector from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'
const Banner = ({ inProgress, resolved }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14 px-5 lg:px-20'>
            <div className='text-white h-64 relative flex flex-col gap-5 justify-center items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-xl overflow-hidden'>
                {/* Left vector */}
                <img
                    src={vector}
                    className="absolute left-0 top-0 h-full opacity-100"
                    alt="vector"
                />

                {/* Right vector */}
                <img
                    src={vector}
                    className="absolute right-0 top-0 h-full rotate-y-180 opacity-100"
                    alt="vector"
                />

                {/* Content */}
                <div className="relative z-10 text-white text-center">
                    <h4 className="text-lg">In-Progress</h4>
                    <h1 className="text-6xl font-semibold">{inProgress}</h1>
                </div>
            </div>
            <div className='text-white h-64 flex flex-col gap-5 justify-center items-center bg-linear-to-br from-[#54CF68] to-[#00827A] rounded-xl relative overflow-hidden'>
                {/* Background vector */}
                <img
                    src={vector2}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="background vector"
                />
                {/* Left vector */}
                <img
                    src={vector}
                    className="absolute left-0 top-0 h-full opacity-100"
                    alt="vector"
                />

                {/* Right vector */}
                <img
                    src={vector}
                    className="absolute right-0 top-0 h-full rotate-y-180 opacity-100"
                    alt="vector"
                />

                {/* Content */}
                <div className="relative z-10 text-white text-center">
                    <h4 className='text-lg'>Resolved</h4>
                    <h1 className='text-6xl font-semibold'>{resolved}</h1>
                </div>

            </div>

        </div>
    );
};

export default Banner;