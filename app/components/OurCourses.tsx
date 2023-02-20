import Image from 'next/image'
import React from 'react'

export default function OurCourses() {
  return (
    <div className='my-[150px] text-transparent bg-clip-text  bg-gradient-to-b from-[#E93565] to-[#74203f] text-center text-[60px] font-bold'>
        <h1 >OUR COURSES</h1>

        <div className='md:flex block text-center md:ml-[100px]'>
            <Image className='md:hidden lg:block' src={"/wcourse.svg"} alt={"/"} height={"50"} width={"600"} ></Image>
            <Image className='md:block lg:hidden hidden' src={"/wcourse.svg"} alt={"/"} height={"50"} width={"400"} ></Image>

            <div className='md:order-first lg:order-last md:text-left  md:mt-[250px] mt-[50px] text-[20px] lg:w-3/4  w-4/4 text-white'>
            <h1 className='white-space-pre text-[32px] whitespace-pre-wrap mb-[30px] '>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</h1>
            <p className='font-light'>GETTING PAKISTAN READY FOR THE NEW ERA OF WEB3.0 AND METAVERSE DEVELOPOMENT.</p>
            <button className='h-12 w-44 mx-[20px] my-[50px] border-4  font-light border-[#00D9F5]'>ENROLL NOW</button>
            </div>
        </div>

        <div className='md:flex block'>
            <div className='order-last'>
            <Image src={"/aicourse.svg"} alt={"/"} height={"50"} width={"600"} ></Image>
            </div>

            <div className='md:text-left text-center md:mt-[250px] mt-[50px] text-[20px] md:w-2/4 w-4/4 text-white md:ml-[80px] ml-[0px]'>
            <h1 className='white-space-pre text-[32px] whitespace-pre-wrap mb-[30px] '>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</h1>
            <p className='font-light'>GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</p>
            <button className='h-12 w-44 mx-[20px] my-[50px] border-4 font-light border-[#00D9F5]'>ENROLL NOW</button>
            </div>
        </div>

        <div className='md:flex block md:ml-[100px]'>
            <Image className='md:hidden lg:block' src={"/bchain.svg"} alt={"/"} height={"50"} width={"600"} ></Image>
            <Image className='md:block lg:hidden hidden' src={"/bchain.svg"} alt={"/"} height={"50"} width={"400"} ></Image>

            <div className='md:order-first lg:order-last md:text-left text-center  md:mt-[250px] mt-[50px] text-[20px] md:w-2/4 w-4/4 text-white'>
            <h1 className='white-space-pre text-[32px] whitespace-pre-wrap mb-[30px] '>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</h1>
            <p className='font-light'>GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS</p>
            <button className='h-12 w-44 mx-[20px] my-[50px] border-4 font-light border-[#00D9F5]'>ENROLL NOW</button>
            </div>
        </div>

        <div className='md:flex block'>
            <div className='order-last'>
            <Image src={"/cncourse.svg"} alt={"/"} height={"50"} width={"600"} ></Image>
            </div>
            <div className='md:text-left text-center md:mt-[250px] mt-[50px] text-[20px] md:w-2/4 w-4/4 text-white md:ml-[80px] ml-[0px]'>
            <h1 className='white-space-pre text-[32px] whitespace-pre-wrap mb-[30px] '>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</h1>
            <p className='font-light'>GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.</p>
            <button className='h-12 w-44 mx-[20px] my-[50px] border-4 font-light border-[#00D9F5]'>ENROLL NOW</button>
            </div>
        </div>

        <div className='md:flex block md:ml-[100px]'>
            <Image className='md:hidden lg:block' src={"/iot.svg"} alt={"/"} height={"50"} width={"600"} ></Image>
            <Image className='md:block lg:hidden hidden' src={"/iot.svg"} alt={"/"} height={"50"} width={"400"} ></Image>

            <div className='md:order-first lg:order-last md:text-left text-center md:mt-[250px] mt-[0px] text-[20px] md:w-2/4 w-4/4 text-white'>
            <h1 className='white-space-pre text-[32px] whitespace-pre-wrap mb-[30px] '>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</h1>
            <p className='font-light'>GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI.</p>
            <button className='h-12 w-44 mx-[20px] my-[50px] border-4 font-light border-[#00D9F5]'>ENROLL NOW</button>
            </div>
        </div>
        

    </div>
  )
}
