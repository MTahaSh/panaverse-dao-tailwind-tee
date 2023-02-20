import Image from 'next/image'
import React from 'react'

export default function Cards() {
  return (
    <div className='flex flex-col md:flex-row items-center md:flex-wrap mx-[50px] justify-between my-[50px]'>
    <Image className='my-[15px]' src={"/islamabad.svg"} height={"100"} width={"300"} alt={"isb"}></Image>
    <Image className='my-[15px]' src={"/lahore.svg"} height={"100"} width={"300"} alt={"lhr"}></Image>
    <Image className='my-[15px]'  src={"/karachi.svg"} height={"100"} width={"300"} alt={"khi"}></Image>
    <Image className='my-[15px]' src={"/peshawar.svg"} height={"100"} width={"300"} alt={"pwr"}></Image>


    </div>
  )
}
