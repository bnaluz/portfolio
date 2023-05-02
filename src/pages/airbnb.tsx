import Image from "next/image";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";


const legilink = () => {
    return <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image  className='absolute z-1' layout='fill' objectFit='cover' src={'/airbnb.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <a href='https://airbnb-alpha-coral.vercel.app/'
                        target='_blank'
                        rel='noreferrer'>
                    <h2 className="py-2 cursor-pointer">Airbnb</h2>
                    </a>
                    <p>Full Stack Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                 <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This is a full stack application designed with TailwindCSS and has full responsiveness. In this application users are able to create an account with their credentials authentication, or use Google and Github authentication. After creating a profile users are then able to start listing their own properties, favoriting properties, and creating/canceling reservations.</p>

                    <a
                        href='https://airbnb-alpha-coral.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <button className='px-8 py-2 mt-4'>Visit Site</button>
                        </a>
                        <a
                        href='https://github.com/bnaluz/airbnb'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <button className='px-8 py-2 ml-2 mt-4'>View Github</button>
                        </a>
                 </div>

             <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Nextjs
                    </p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> TypeScript
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> TailwindCSS
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> MongoDB
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Prisma
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