import React from 'react'
import ProjectItem from './ProjectItem'

const WorkExperience = () => {
  return (
    <div id='work' className='w-full pt-6'>
        <div className='max-w-[1440px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-blue-600'>Work Experience</p>
            <h2 className='py-4'>What I've Worked On</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
            title='Thread The Change' 
            lang1='Nextjs'
            lang2='Javascript'
            lang3='TailwindCSS'
            projectURL='/ttc' 
            backgroundImg='/ttc.png'
            />
              <ProjectItem 
            title='LegiLink' 
            backgroundImg={'/LegiLink.jpg'}
            lang1='Nextjs'
            lang2='Typescript'
            lang3='TailwindCSS'
            projectURL='/legilink' 
            />

            </div>
        </div>
    </div>
  )
}

export default WorkExperience
