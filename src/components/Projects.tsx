
import ProjectItem from './ProjectItem';


const Projects = () => {
    return (
    <div id='projects' className='w-full pt-6'>
        <div className='max-w-[1440px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-blue-600'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
          
               <ProjectItem 
            title='Count Me Inventory' 
            backgroundImg={'/countme1.png'}
            lang1='React'
            lang2='Nextjs'
            lang3='PostgreSQL'
            projectURL='/countme' 
            />
         
              <ProjectItem 
            title='TaskWave' 
            backgroundImg={'/tw1.png'}
            lang1='React'
            lang2='Redux'
            lang3='Flask'
            projectURL='/taskwave' 
            />
            
             </div>
        </div>
    </div>
    )
}

export default Projects;
