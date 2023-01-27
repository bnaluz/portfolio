import Image from "next/image";

const About = () => {
    return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1440px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-blue-600'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>//"When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho</p>
                <p className='py-2 text-gray-600'>I have a passion for building and delivering the best quality web  applications, and love the challenge of continually improving my skillset.</p>
                <p className='py-2 text-gray-600'>I originally started with learning Javascript, HTML, and CSS, which quickly showed me the endless possibilities of web development. Since then I've started building responsive front-end applications with Next.js </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={'/about.png'} alt='/' width='800' height='200' className='rounded-xl'/>
            </div>
        </div>
    </div>
    )
}

export default About;