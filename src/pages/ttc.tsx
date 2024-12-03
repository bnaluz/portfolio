import Image from "next/image";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from "next/link";

const ttc = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={'/ttc2.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <a href='https://www.threadthechange.org/'
                        target='_blank'
                        rel='noreferrer'>
                        <h2 className="py-2 cursor-pointer">threadthechange.org</h2>
                    </a>
                    <p>Non-Profit Web Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Work Experience</p>
                    <h2>Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Thread the Change</h2>
    <p className="text-gray-600 mb-4">
        I collaborated with a non-profit organization, My New Red Shoes, to develop a web application for their environmentally conscious fashion show, an event that welcomed 
        <strong className="ml-1">100 guests</strong>, engaged <strong>50 volunteers</strong>, and successfully raised over <strong>$40,000</strong> for the organization. 
        The platform emphasized <strong>sustainability</strong> and <strong>community engagement</strong> by promoting the event and providing key details to its audience.
    </p>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Key Features:</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li><strong>Event Details:</strong> Provided clear and concise information about the event, including date, time, and location.</li>
        <li><strong>Student Involvement:</strong> Highlighted student contributions and achievements as part of the event.</li>
        <li><strong>Fundraising Information:</strong> Showcased the organization’s mission and enabled donations to support their sustainability efforts.</li>
        <li><strong>Image Management:</strong> Integrated <strong>Cloudinary</strong> to optimize and manage event images, ensuring fast loading times and a seamless user experience.</li>
    </ul>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Technology Stack:</h3>
    <p className="text-gray-600 mb-4">
        The platform was built using <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong> to create a responsive and scalable web application. 
        <strong className="ml-1">Cloudinary</strong> was leveraged for efficient media management and optimization.
    </p>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Collaboration & Impact:</h3>
    <p className="text-gray-600">
        By gathering feedback from stakeholders throughout the development process, I ensured the platform’s design and functionality aligned with the organization’s mission. 
        The result was a user friendly application that effectively promoted sustainability and community engagement, supporting the non-profit in achieving its goals.
    </p>
</div>



                    <a
                        href='https://www.threadthechange.org/'
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
                                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next.js
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                 <RiRadioButtonFill className='pr-1' /> Cloudinary
                             </p>
                        </div>
                    </div>
                </div>

                <Link href='/#work'>
                    <p className='underline cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out'>Back</p>
                </Link>
            </div>
        </div>
    );
}

export default ttc;
