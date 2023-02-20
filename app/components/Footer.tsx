import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='md:mt-[150px] mt-[0px]  bg-[#E93565]  z-1 md:p-[20px] md:pb-[0px] text-center pb-[100px]'>
    
    <div className='flex justify-between md:flex-row flex-col  items-center'>
    
    <div className='flex flex-col md:flex-row md:my-[20px] my-[50px]'>
    <h1 className='mx-[20px] md:my-[0px] my-[40px]'>PANAVERSE</h1>
    <Link href="#" className='mx-[20px]'> Copyright@2023 by Muhammad Taha Rizwan </Link>
    </div>

    <div className='flex items-center'>
        <button className=' rounded-full px-2 h-8 w-8 mx-2 bg-[#102342]'><FaFacebookF className='text-[#E93565]'/></button>
        <button className='rounded-full px-2 h-8 w-8 mx-2 bg-[#102342]'><FaInstagram className='text-[#E93565]'/></button>
        <button className='rounded-full px-2 h-8 w-8 mx-2 bg-[#102342]'><FaTwitter className='text-[#E93565]'/></button>
    </div>
    </div>
    </div>
  )
}
