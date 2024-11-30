import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

const countme = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={'/countme1.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                <a href='https://count-me-inventory.vercel.app/'
                        target='_blank'
                        rel='noreferrer'>
                        <h2 className="py-2 cursor-pointer">Count Me Inventory</h2>
                    </a>
                    <p>Full Stack Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Work Experience</p>
                    <h2>Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Inventory Management App</h2>
                        <p className="text-gray-600 mb-4">
                        I developed a full-stack Inventory Management App to address operational inefficiencies and enhance inventory tracking at  
                        <strong className='ml-1'>Arnouse Digital Devices Corp</strong>. This tool is now actively used as their primary inventory management system, 
                        saving the team approximately 20% of their time, equating to a full day of work each week.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Products (Part Numbers):</strong> Users can create, view, edit, and delete part numbers to maintain an organized product catalog.</li>
                        <li><strong>Projects:</strong> Users can create and manage projects, linking specific products to each project for better resource allocation.</li>
                        <li><strong>Products in Projects:</strong> A many-to-many relationship that allows tracking of quantities of specific products used in each project.</li>
                        <li><strong>Picklists:</strong> Users can generate and manage picklists, specifying the quantities of products needed for a project while automatically adjusting inventory levels.</li>
                        <li><strong>Organizations:</strong> Enables multiple teams to manage their own inventory and projects, providing access controls and visibility within a shared system.</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Technology Stack:</h3>
                    <p className="text-gray-600 mb-4">
                        The app was built using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> for a responsive and 
                        user-friendly front end. On the backend, I used <strong>Prisma</strong> with a <strong>PostgreSQL</strong> database to ensure 
                        scalable and secure data management.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Collaboration & Impact:</h3>
                    <p className="text-gray-600">
                        Collaborating closely with stakeholders, I iteratively gathered feedback to refine the app’s features, ensuring it met the specific needs of 
                        <strong className='ml-1'>Arnouse Digital Devices Corp</strong>. This project showcases my ability to design and implement complex data relationships and deliver 
                        impactful solutions for real world business challenges.
                    </p>
                    </div>
                    <a
                        href='https://count-me-inventory.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out'>Visit Site</button>
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
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Prisma
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> PostgreSQL
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Vercel
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next.js
                            </p>
                        </div>
                    </div>
                    
                </div>

                <Link href='/#projects'>
                    <p className='underline cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out'>Back</p>
                </Link>
            </div>
        </div>
    );
}

export default countme
