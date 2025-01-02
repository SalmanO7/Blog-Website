import React from 'react'

const Hero = () => {
    return (
        <div style={{
            backgroundImage: 'url("/assets/Hero3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
            className="h-[100vh] flex justify-center items-center ">
            <div className="h-screen flex justify-center items-center">
                <div className="text-center">
                    <h1 className="px-5 text-[20px] md:text-3xl lg:text-6xl xl:text-7xl font-bold bg-white text-black rounded-full mx-10 py-1">Welcome to the Blogs</h1>
                    <p className="mx-3 sm:mx-0 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white bg-black rounded-full sm:px-3 py-1 my-1">A place to share knowledge and better understand the world</p>
                </div>
            </div>
        </div>
    )
}

export default Hero