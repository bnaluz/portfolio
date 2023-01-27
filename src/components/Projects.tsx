
import ProjectItem from './ProjectItem';


const Projects = () => {
    return (
    <div id='projects' className='w-full pt-6'>
        <div className='max-w-[1440px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-blue-600'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
       
            //@ts-ignore
            <ProjectItem 
            title='LegiLink Website' 
            backgroundImg={'/legilink.jpg'}
            lang1='Next.js'
            lang2='Typescript'
            lang3='Tailwind'
            projectURL='/legilink' 
            />

            <ProjectItem 
            title='Portfolio Website' 
            backgroundImg={'/LegiLink.jpg'} 
            lang1='Next.js'
            lang2='Typescript'
            lang3='Tailwind'
            projectURL='/portfolio' 
            />
            
           
             </div>
        </div>
    </div>
    )
}

export default Projects;