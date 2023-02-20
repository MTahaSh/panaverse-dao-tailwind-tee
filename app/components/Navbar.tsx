import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='flex justify-between px-9 py-6 bg-[#102342] items-center shadow-[0px_35px_60px_-15px_rgba(233,53,101,.6)]  '>
    
    {/* Image div */}
    <div>
        <Image src="/pana-img.png" height={"50"} width={"50"} alt='/'></Image>
        
    </div>

    {/* Items */}
    <div  >

    

    <ul className='md:flex text-white hidden'>
      <Link href={"#"}><li className='mx-6'>Home</li></Link>
      <Link href={"#"}><li className='mx-6'>Courses</li></Link>
      <Link href={"#"}><li className='mx-6'>About</li></Link>
      <Link href={"#"}><li className='mx-6'>Contact</li></Link>
      
    </ul>
  </div>

  <div className='flex items-center'>
  <div className='text-white flex md:hidden mx-[20px] size-[50px] order-last'>
    <button ><FaBars/></button>
    </div>
    <button className='h-12  w-36 bg-gradient-to-r from-[#BC2B5D] to-[#E93565]  text-white'>REGISTER</button>
  </div>

</div>
  )
}
