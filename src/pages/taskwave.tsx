import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const taskwave = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={'/tw2.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                <a href='https://task-wave.onrender.com/'
                        target='_blank'
                        rel='noreferrer'>
                        <h2 className="py-2 cursor-pointer">TaskWave</h2>
                    </a>
                    <p>Full Stack Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project Experience</p>
                    <h2>Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Task Wave</h2>
    <p className="text-gray-600 mb-4">
        Task Wave is a project management tool designed to simplify workflows and enhance team productivity. Developed as part of a group project, 
        the application features <strong>boards, lists, cards, and comments</strong> for Kanban-style task management, providing teams with an 
        intuitive way to organize and track tasks efficiently.
    </p>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Key Features:</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li><strong>Boards:</strong> Users can create, view, edit, and delete project boards for task organization.</li>
        <li><strong>Lists:</strong> Enable categorization of tasks within boards, offering a clear overview of different project stages.</li>
        <li><strong>Cards:</strong> Users can add, update, and delete tasks within lists to manage project details effectively.</li>
        <li><strong>Comments:</strong> Facilitates team collaboration by allowing users to add, edit, and delete comments on specific tasks.</li>
    </ul>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Technology Stack:</h3>
    <p className="text-gray-600 mb-4">
        The project was built using <strong>React</strong> and <strong>Redux</strong> for the front-end, ensuring a responsive and dynamic user experience. 
        On the back-end, <strong>Flask</strong> and <strong>PostgreSQL</strong> were used to provide secure and scalable data management. 
        The application was hosted on <strong>Render</strong>, leveraging a reliable infrastructure for deployment.
    </p>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Collaboration & Impact:</h3>
    <p className="text-gray-600">
        I worked on both the <strong>front-end</strong> and <strong>back-end</strong>, integrating Redux to manage complex application state and ensuring seamless 
        updates across components. By collaborating with team members, I helped prioritize user experience through iterative feedback and feature refinement. 
        Task Wave showcases my ability to develop scalable and user-friendly applications in a collaborative team environment.
    </p>
</div>


                    <a
                        href='https://task-wave.onrender.com/'
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
                        <RiRadioButtonFill className='pr-1' /> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <RiRadioButtonFill className='pr-1' /> Redux
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <RiRadioButtonFill className='pr-1' /> CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> PostgreSQL
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <RiRadioButtonFill className='pr-1' /> Flask
                         </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <RiRadioButtonFill className='pr-1' /> SQLAlchemy
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <RiRadioButtonFill className='pr-1' /> Render
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

export default taskwave
