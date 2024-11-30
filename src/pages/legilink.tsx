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
                <a href='https://www.legiact.com/'
                        target='_blank'
                        rel='noreferrer'>
                        <h2 className="py-2 cursor-pointer">LegiLink (Now LegiAct)</h2>
                    </a>
                    <p>Full Stack Application</p>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Work Experience</p>
                    <h2>Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">LegiLink</h2>
    <p className="text-gray-600 mb-4">
        During my time as a front-end developer at LegiLink, I contributed to building user-centric interfaces to foster transparency and connection between citizens and government. The platform enables users to connect with local legislators, view current bills, and express their stances on key propositions, supporting informed civic engagement.
    </p>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Key Features:</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li><strong>Slack Integration:</strong> Developed a user input form integrated with the <strong>Slack API</strong>, streamlining communication by funneling user requests directly to designated Slack channels.</li>
        <li><strong>Responsive Design:</strong> Optimized the front-end using <strong>React JS</strong> and <strong>Tailwind CSS</strong> to ensure seamless user experiences across all devices.</li>
        <li><strong>Server-Client Communication:</strong> Leveraged <strong>tRPC</strong> for efficient communication between the front-end and back-end systems, enhancing performance and scalability.</li>
    </ul>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Technology Stack:</h3>
    <p className="text-gray-600 mb-4">
        The platform was built using <strong>React JS</strong> and <strong>Tailwind CSS</strong> for a modern front-end experience. 
        Hosted on <strong>Vercel</strong> and backed by <strong>Supabase</strong>, the application utilized <strong>tRPC</strong> to ensure robust and scalable server-client interactions.
    </p>
    
    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Impact:</h3>
    <p className="text-gray-600">
        The integration of the Slack API significantly improved response times for user inquiries, reducing delays by <strong>30%</strong>. 
        This project highlights my ability to create impactful features that enhance communication and promote transparency.
    </p>

    
</div>
<a
                        href='https://www.legiact.com/'
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
