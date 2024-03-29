import Image from "next/image";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";


const legilink = () => {
    return <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image  className='absolute z-1' layout='fill' objectFit='cover' src={'/legilogin.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <a href='https://www.legilink.com/'
                        target='_blank'
                        rel='noreferrer'>
                    <h2 className="py-2 cursor-pointer">LegiLink.com</h2>
                    </a>
                    <p>Full Stack Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                 <div className='col-span-4'>
                    <p>Work Experience</p>
                    <h2>Overview</h2>
                    <p>I am currently working as a front-end developer at LegiLink, where I use React JS and Tailwind CSS to create front-end user interfaces. LegiLink's mission is to promote transparency and connection in government by ensuring equal representation. Users can create a profile on the website to immediately connect with their local legislators, view current legislative bills, and express their stance on current propositions. The site is hosted on Vercel and uses Supabase as its database.</p>

                    <a
                        href='https://www.legilink.com/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <button className='px-8 py-2 mt-4'>Visit Site</button>
                        </a>
                 </div>

             <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> TypeScript
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Tailwind
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Supabase
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> tRPC
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Vercel
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

export default legilink;