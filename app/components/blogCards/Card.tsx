import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { blogsData } from './BlogData'

const Card = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-col py-10'>
                <h1 className=' mt-7 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Blogs</h1>
                <p className='text-gray-400 py-1'>Our Blogs</p>
            </div>
            <div
                id='blogs'
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 gap-y-8 px-6 sm:px-10 md:px-5 xl:px-10 2xl:px-14'
            >{blogsData.map((item) => {
                return <div key={item.id} className='shadow-lg rounded-2xl py-4 px-3 flex flex-col justify-center items-center '>
                    <div className='flex justify-center items-center py-3'>
                        <Image
                            className='h-44'
                            src={item.image}
                            alt={item.title} />
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='text-sm xl:text-base py-2'>
                            <Markdown>
                                {item.title}
                            </Markdown>
                        </div>
                        <Link href={`/${item.id}`}>
                            <button
                                className='text-sm font-semibold border bg-[#1c9b77] text-white transition transform hover:bg-gray-400 hover:shadow-lg rounded-lg py-1 px-3'
                            >Read More</button>
                        </Link>
                    </div>
                </div>
            })}</div>
        </>
    )
}

export default Card