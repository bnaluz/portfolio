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
                    <p>
    I collaborated with a non-profit organization to develop a web application for their environmentally conscious fashion show, an event that welcomed <strong>100 guests</strong>, engaged <strong>50 volunteers</strong>, and successfully raised over <strong>$40,000</strong> for the organization. The project was built using <strong>Next.js, React, and Tailwind CSS</strong>, providing a modern, responsive, and scalable design. My approach emphasized <strong>cost-effective development</strong> to ensure efficient delivery and maintainability.
</p>
<p>
    Throughout the project, I actively gathered feedback from stakeholders to ensure the design and functionality aligned with the organization's mission. This included implementing features for <strong>event details, student involvement, and fundraising information</strong>, enabling the non-profit to effectively promote sustainability. I also integrated <strong>Cloudinary</strong> to optimize and manage event images, ensuring fast loading times and a seamless user experience. By leveraging <strong>responsive design</strong>, I ensured a smooth and engaging experience for users across all devices.
</p>


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

                <Link href='/#projects'>
                    <p className='underline cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out'>Back</p>
                </Link>
            </div>
        </div>
    );
}

export default ttc;
