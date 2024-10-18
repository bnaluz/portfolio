import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Main = () =>{
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div >
                    <p className='uppercase text-sm tracking-widest text-gray-600 pt-5'>Let's build something impactful together.</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-blue-600'>Bobby</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&rsquo;m a developer with a passion for building responsive, user-friendly web applications that make a real difference. With a focus on clean design, efficient code, and seamless user experiences, I strive to create solutions that not only look great but function flawlessly. Whether you&rsquo;re looking to develop a new product from scratch or improve an existing one, I&rsquo;d love to bring your vision to life. Let&rsquo;s connect and build something meaningful together!
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/bobby-naluz-664283197"
                        target='_blank'
                        rel='noreferrer'
                        >
                        <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        </a>

                        <a href='https://github.com/bnaluz'
                        target='_blank'
                        rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsGithub/>
                        </div>
                        </a>
                       
                        <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                        </div>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;
