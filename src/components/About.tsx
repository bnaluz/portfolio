import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1440px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-blue-600'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Hi, I'm Bobby! My journey into coding began with a love for solving problems and a fascination with how technology can simplify everyday tasks. I first discovered this passion when I was managing operations at Orangetheory and started using Excel to track business metrics. What began as simple data tracking quickly turned into a deeper curiosity about how I could automate and optimize processes. That led me to teach myself VBA, and from there, my interest in building technical solutions only grew.</p>
                <p className='py-2 text-gray-600'>I’ve since moved on to more advanced tools and frameworks, working with technologies like JavaScript, React, and Python to build dynamic, user-friendly web applications. Each project I’ve taken on has allowed me to grow my skills and reinforce why I love coding: the thrill of creating something functional from scratch and seeing it make a real difference for users.</p>
                <p className='py-2 text-gray-600'>From working on internal tools at Arnouse Digital Devices to developing web features at LegiLink, I’ve had the chance to collaborate across teams, tackle complex technical challenges, and refine my abilities in full-stack development. I also built a website for My New Red Shoes' 'Thread the Change' fashion show, ensuring the platform was visually appealing, functional, and accessible, while keeping costs low and delivering the project on time. Completing a year-long bootcamp at App Academy was the next step in my journey, where I gained hands-on experience across the tech stack, from React and TypeScript to backend systems like PostgreSQL and SQLAlchemy.</p>
                <p className='py-2 text-gray-600'>Every project is an opportunity to learn, grow, and build something that has a tangible impact. Whether you’re looking to create a new product, improve an existing one, or bring a fresh idea to life, I’m excited to help make it happen. Let’s connect and build something meaningful together!</p>
                <Link href='/#projects'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                <Image src={'/about.png'} alt='/' width='800' height='200' className='rounded-xl'/>
            </div>
        </div>
    </div>
    )
}

export default About;
