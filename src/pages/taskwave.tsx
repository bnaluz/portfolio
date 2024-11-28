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
                    <p>
    Task Wave is a project management tool designed to simplify and streamline workflows for teams. As part of a group project, I collaborated with my team to develop a user-friendly application featuring <strong>boards, lists, cards, and comments</strong> for Kanban-style task management. The project was built using <strong>React, Redux, Flask, and PostgreSQL</strong>, ensuring a modern, responsive, and scalable design.
</p>
<p>
    Throughout the development process, I worked on both the <strong>front-end</strong> and <strong>back-end</strong>, integrating <strong>Flask</strong> and <strong>PostgreSQL</strong> to support secure and scalable data storage. I implemented <strong>Redux and Thunks</strong> to handle the application’s complex state, ensuring smooth and consistent updates across components. Additionally, I actively collaborated with team members to gather feedback and refine features, prioritizing functionality and user experience.
</p>
<p>
    Task Wave demonstrates my ability to work effectively in a team, manage complex feature relationships, and deliver polished applications. The project was hosted on <strong>Render</strong>, leveraging a robust architecture for reliability and scalability.
</p>

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
