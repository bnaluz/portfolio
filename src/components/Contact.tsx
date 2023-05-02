import Image from "next/image";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const Contact = () => {

    const [enteredName,setEnteredName] = useState('')
    const [enteredPhone,setEnteredPhone] = useState('');
    const [enteredEmail,setEnteredEmail] = useState('');
    const [enteredSubject,setEnteredSubject] = useState('');
    const [enteredMessage,setEnteredMessage] = useState('');
    const [error,setError] = useState(false)
    

    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      if(enteredName.length===0||enteredPhone.length===0||enteredSubject.length===0||enteredMessage.length===0){
        setError(true);
        return;
      }
      
      //@ts-ignore
      emailjs.sendForm('service_ueobaor', 'template_rtoznup', form.current, 'Ma8e5J36TCwhSFiQ9')
        .then((result) => {
            console.log(result.text);
            toast.success('Message Sent!')
        }, (error) => {
            console.log(error.text);
        });
        setEnteredName('');
        setEnteredPhone('');
        setEnteredEmail('');
        setEnteredSubject('');
        setEnteredMessage('');
        setError(false)
       
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
                            <Image src={'/ContactImg.png'} alt='/' width='1200' height='1200' className='rounded-xl '/>
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
                       
                        <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                        </div>
                        </Link>

                        </div>
                    </div>


                    </div>
                    
                </div>
{/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className="p-4">
                        {/* @ts-ignore */}
                        <form ref={form} onSubmit={sendEmail} >
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2 relative">
                                    
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Name</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type='text' name="name" value={enteredName} onChange={(e)=> setEnteredName(e.target.value)}></input>
                                    {error&&enteredName.length===0? <label className="text-red-500 border-sm">Cannot be empty.</label> : ''}
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Phone Number</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='text' name='phoneNumber' value={enteredPhone} onChange={(e)=> setEnteredPhone(e.target.value)}></input>
                                    {error&&enteredPhone.length===0? <label className="text-red-500 border-sm">Cannot be empty.</label> : ''}
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2">Email</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='email' name='email' value={enteredEmail} onChange={(e)=> setEnteredEmail(e.target.value)}>
                                        </input>  
                                        {error&&enteredEmail.length===0? <label className="text-red-500 border-sm">Cannot be empty.</label> : ''}
                            </div>
                            <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2">
                                Subject
                            </label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type='text' name='subject' value={enteredSubject} onChange={(e)=> setEnteredSubject(e.target.value)}>
                                        </input>  
                                        {error&&enteredSubject.length===0? <label className="text-red-500 border-sm">Cannot be empty.</label> : ''}
                            </div>
                            <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2">
                                Message
                            </label>
                                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows={10} name='message' value={enteredMessage} onChange={(e)=> setEnteredMessage(e.target.value)}>
                                        </textarea>  
                                        {error&&enteredMessage.length===0? <label className="text-red-500 border-sm">Cannot be empty.</label> : ''}
                            </div>
                            <button  className="w-full pt-4 p-4 text-white hover:scale-105 ease-in duration-300">Send Message</button>
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