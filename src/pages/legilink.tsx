import Image from "next/image";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from "next/link";

const legilink = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={'/legilogin.png'} alt='/' />
                <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2 ">LegiLink</h2>
                    <p>Full Stack Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Work Experience</p>
                    <h2>Overview</h2>
                    <p>
                        During my time as a front-end developer at LegiLink, I worked on building user-centric interfaces using <strong>React JS</strong> and <strong>Tailwind CSS</strong>. LegiLink's mission was to foster transparency and connection between citizens and government by making it easier for users to connect with local legislators, view current bills, and express their stances on key propositions.
                    </p>
                    <p>
                        One of the key features I developed was a user input form integrated with the <strong>Slack API</strong>, which streamlined communication by funneling user requests directly to a designated Slack channel. This feature significantly improved the team's ability to respond to user inquiries and feedback in real time. Additionally, I contributed to optimizing the front-end design to ensure seamless, responsive user experiences across devices.
                    </p>
                    <p>
                        The site was hosted on <strong>Vercel</strong> and used <strong>Supabase</strong> as its database, utilizing <strong>tRPC</strong> for efficient server-client communication. My role also involved gathering feedback from stakeholders to refine and enhance the user experience, ensuring the platform met its goal of promoting transparent and effective communication.
                    </p>
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> TypeScript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
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
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Slack API
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

export default legilink;
