import Image from "next/image";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";



const portfolio = () => {
    return <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image  className='absolute z-1' layout='fill' objectFit='cover' src={'/Portfolio.jpg'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <Link href='/'>
                    <h2 className="py-2 cursor-pointer">bobbynaluz.com</h2>
                    </Link>
                    <p>Next.js TailWindCSS</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                 <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Welcome to my web portfolio! This site was built using Next.js, Tailwind CSS, React, and TypeScript. I chose this tech stack because of its flexibility, ease of use, and ability to create responsive and performant web applications. I hope you enjoy exploring my portfolio and seeing the potential of this tech stack for your own web projects.</p>
                    <a
                        href='https://github.com/bnaluz/portfolio'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <button className='px-8 py-2 mt-4'>GitHub</button>
                        </a>

                        
                 </div>

             <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Next.js
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> TypeScript
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> TailwindCSS
                    </p>
                
                    </div>
                </div>
             </div>
             
             <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
             </Link>
           
            </div>
        </div>    
 
}

export default portfolio;