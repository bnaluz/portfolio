import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";


const Navbar = () => {

  const [nav,setNav] = useState(false)
  const [shadow,setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/legilink' ||
      router.asPath === '/portfolio' 
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);




  const navHandler = () => {
    setNav(!nav);
  };

 
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);


  return (
    
      <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center py-11 w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
        <Image src={'/../public/assets/navbarLogo.png'} alt='/' width='115' height='50'
        />
        </Link>
        <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about' >
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills' >
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#projects' >
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact' >
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={navHandler} className='md:hidden' >
              <AiOutlineMenu size={25}/>
            </div>
        </div>
      </div>

{/* hamburger menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300' : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'  onClick={()=>setNav(false)}>
              <Image src='/../public/assets/navbarLogo.png' alt='/' width='85' height='60'/>
              </Link>
              <div onClick={navHandler} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-3'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something amazing together.</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/' onClick={()=>setNav(false)}>
                <li className='py-4 text:sm'>Home</li>
              </Link>
              <Link href='/#about' onClick={()=>setNav(false)}>
                <li className='py-4 text:sm'>About</li>
              </Link>
              <Link href='/#skills' onClick={()=>setNav(false)}>
                <li className='py-4 text:sm'>Skills</li>
              </Link>
              <Link href='/#projects' onClick={()=>setNav(false)}>
                <li className='py-4 text:sm'>Projects</li>
              </Link>
              <Link href='/#contact' onClick={()=>setNav(false)}>
                <li className='py-4 text:sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-32'>
              <p className='uppercase tracking-widest text-blue-600' >Connect with me:</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                
                <a href="https://www.linkedin.com/in/bobby-naluz-664283197"
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn/>
                </div>
                </a>

                <a href='https://github.com/bnaluz'
                target='_blank'
                rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub/>
                </div>
                </a>

                <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <Link href='/#contact' onClick={()=>setNav(false)}>
                <AiOutlineMail/>
                </Link>
                </div>

                {/* <div  className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill/>
                </div> */}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
