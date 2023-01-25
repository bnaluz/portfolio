import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRef } from "react";
import emailjs from '@emailjs/browser'


const Contact = () => {

    // having trouble using .env variables for email.js plug-in 
    console.log(process.env)
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    //.env.local
    emailjs.sendForm(process.env.SERVICE, `${process.env.TEMPLATE}`, form.current, `${process.env.PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };





    return <div id='contact' className='w-full lg:h-screen pt-6'>
        <div className='max-w-[1440px] m-auto px-2 py-16 w-full'>
            <p className='uppercase text-xl tracking-widest  text-blue-600'>Contact</p>
            <h2 className='py-4'>Let's connect.</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src='/../public/assets/ContactImg.png' alt='/' width='1200' height='1200' className='rounded-xl hover:scale-105 ease-in duration-300'/>
                        </div>
                        <div>
                            <h2 className='py-2'>
                                Bobby Naluz
                            </h2>
                            <p>Web Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me, and let's talk.</p>
                        </div>
                        <div>
                        <p className="uppercase pt-8">Connect with me.</p>
                        <div className='flex items-center justify-between'>

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
                       
                        <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='/#contact'>
                        <AiOutlineMail/>
                        </Link>
                        </div>

                        {/* <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div> */}
                        </div>
                    </div>


                    </div>
                    
                </div>
{/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className="p-4">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Name</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='text'></input>
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Phone Number</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='text'></input>
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2">Email</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='email'>
                                        </input>  
                            </div>
                            <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2">
                                Subject
                            </label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='text'>
                                        </input>  
                            </div>
                            <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2">
                                Message
                            </label>
                                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows={10}>
                                        </textarea>  
                            </div>
                            <button className="w-full pt-4 p-4 text-gray-300">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>

{/* scroll */}
    <div className="flex justify-center py-12 m-2 w-full text-xl">
        <Link href='/' >
            <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className="text-blue-600" size={30}/>
            </div>
        </Link>
    </div>

        </div>   
    </div>
};

export default Contact; 