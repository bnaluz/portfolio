import Image from "next/image"
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const sbdupe = () => {
    return <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image  className='absolute z-1' layout='fill' objectFit='cover' src={'/sbPage.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                <a href='https://sb-dupe.vercel.app/'
                        target='_blank'
                        rel='noreferrer'>
                    <h2 className="py-2 cursor-pointer">sb-dupe.vercel.app</h2>
                    </a>
                    <p>Front End Project</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                 <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This was a project creating the website to one of my favorite stores. I used Next.js as the framework, written in Typescript, and styled with TailwindCSS. The primary focus was taking the look of a website and recreating it visually. The landing page and shop page are made to mimic the live site from Sports Basement.</p>
                    <a
                        href='https://sb-dupe.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <button className='px-8  py-2 mt-4'>View the site</button>
                        </a>
                    <a
                        href='https://github.com/bnaluz/sb-dupe'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <button className='px-8 mx-2 py-2 mt-4'>GitHub</button>
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

export default sbdupe;