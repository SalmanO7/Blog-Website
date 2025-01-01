import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-400 text-white py-6 mt-20">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">Dynamic Blog Website</p>
                <div className="flex justify-center space-x-4 mt-4 pt-3 flex-wrap text-sm md:text-base">
                    <a href="#" className="text-gray-800 hover:text-white mb-2 sm:mb-0">Privacy Policy</a>
                    <a href="#" className="text-gray-800 hover:text-white mb-2 sm:mb-0">Terms of Service</a>
                    <a href="#" className="text-gray-800 hover:text-white mb-2 sm:mb-0">Contact Us</a>
                </div>
                <p className="mt-4 text-sm md:text-base pt-3">&copy; 2025 Muhammad Salman. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer