import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1440px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-blue-600'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>//"When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho</p>
                <p className='py-2 text-gray-600'>Building high-quality web applications is my passion, and I'm constantly pushing myself to improve my skills and knowledge. I thrive on challenging projects that allow me to learn and grow as a developer.</p>
                <p className='py-2 text-gray-600'>With over two years of experience under my belt, I am well-versed in web development fundamentals and have the expertise to build stunning and functional websites and web applications. I have gained extensive experience working with a wide range of technologies such as HTML, CSS, Javascript and their frameworks and libraries. In addition to my technical skills, I am a strong communicator and team player, having collaborated with designers and developers to deliver projects on time and to specification. Whether you are looking to build a new website, revamp an existing one, or create a custom web application, I have the tools to bring your ideas to life.</p>
                <Link href='/#projects'>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 '>
                <Image src={'/about.png'} alt='/' width='800' height='200' className='rounded-xl'/>
            </div>
        </div>
    </div>
    )
}

export default About;