import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import NavLogo from "@/public/assets/logo.png"

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center py-2 xl:py-3 bg-gray-400 text-white'>
      <Image src={NavLogo} alt='Logo' className='max-w-10 rounded-full' />
      <div className='hidden sm:flex justify-center items-center border px-3 py-1 rounded-2xl'>
        <label htmlFor="search">
          <CiSearch className='text-2xl xl:text-3xl' />
        </label>
        <input
          className='text-sm xl:text-base outline-none w-full pl-2 bg-gray-400 text-white placeholder:text-white'
          type="text"
          name='search'
          placeholder='Search Blogs...'
        />
      </div>
      <Link href="/" className='text-white bg-[#1c9b77] py-1 px-3 text-sm xl:text-base rounded-lg hover:bg-gray-400 hover:border  transition transform' >Blogs</Link >
    </nav>
  )
}

export default Navbar