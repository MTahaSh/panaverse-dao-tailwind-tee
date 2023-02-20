import Image from 'next/image'
import React from 'react'

export default function Blogs() {
  return (
    <div >
    <div className='md:mb-[150px] mb-[50px] text-transparent bg-clip-text  bg-gradient-to-b from-[#E93565] to-[#74203f] text-center text-[60px] font-bold'>
      <h1>OUR BLOGS</h1>
    </div>

    <div className='flex md:justify-between justify-center lg:flex-nowrap flex-wrap items-center md:flex-row flex-col ml-[90px] text-white  '>

    <div className='mb-[15px]'> 
    <Image src={"/img1.svg"} alt={"/"} height={"100"} width={"250"}></Image>

    <div className='my-[20px] mr-[20px] whitespace-pre-wrap w-3/4'>  
    <h2 className='text-[20px] font-bold '>The Power of Blockchain: Transforming Industries Finance </h2>
    <p className='mt-[15px]'>An examination of how blockchain technology is being adopted across various industries, from supply chain management.</p>
    
    
    <div className='flex md:mt-[12px] mt-[20px] text-[#E93565]'>
    <Image alt='/' height={"50"} width={"50"} src={"/avatar.svg"}></Image>
    <div className='ml-[12px]'>
    <p>Bessie Cooper</p>
    <p>Feb 1, 2020</p>
    </div>
    </div>

    </div>

    </div>
    
    
    <div className='mb-[15px]'> 
    <Image src={"/img2.svg"} alt={"/"} height={"100"} width={"250"}></Image>

    <div className='my-[20px] mr-[20px] whitespace-pre-wrap w-3/4'>
    <h2 className='text-[20px] font-bold'>Decentralised Exchanges (DEXs): Revolutionising Crypto Trade </h2>
    <p className='mt-[15px]'>An analysis of the benefits of decentralized exchanges over centralized exchanges and their impact on the future of crypto trading.</p>
    
    
    <div className='flex md:mt-[12px] mt-[20px] text-[#E93565]'>
    <Image alt='/' height={"50"} width={"50"} src={"/avatar.svg"}></Image>
    <div className='ml-[12px]'>
    <p>Devon Lane</p>
    <p>Jan 24, 2020</p>
    </div>
    </div>

    </div>

    </div>
    
    
    <div className='mb-[15px]'> 
    <Image src={"/img3.svg"} alt={"/"} height={"100"} width={"250"}></Image>

    <div className='my-[20px] mr-[20px] whitespace-pre-wrap w-3/4'>
    <h2 className='text-[20px] font-bold'>Web3: Decentralizing the Internet for a More Secure Future</h2>
    <p className='mt-[15px]'>A discussion of the potential of Web3 technologies to transform the internet into a decentralized network and enhance privacy.</p>
    
    
    <div className='flex md:mt-[12px] mt-[20px] text-[#E93565]'>
    <Image alt='/' height={"50"} width={"50"} src={"/avatar.svg"}></Image>
    <div className='ml-[12px]'>
    <p>Brooklyn Simmons</p>
    <p>Jan 20, 2020</p>
    </div>
    </div>

    </div>

    </div>
    
  

    </div>

    </div>
  )
}
 