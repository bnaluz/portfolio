import Link from "next/link";
import Image, { StaticImageData } from "next/image";



type ProjectItemProps = {
    title:string;
    backgroundImg: StaticImageData;
    projectURL: string;
    lang1: string;
    lang2: string; 
    lang3: string;
}


const ProjectItem = ({title,backgroundImg,projectURL,lang1,lang2,lang3,} : ProjectItemProps) => {
    return <div >
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-400 to-blue-600'>
                    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl tracking-wider text-center text-white '>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{lang1}, {lang2}, {lang3}</p>
                        <Link href={projectURL}>
                            <p className='text-center py-3 rounded-xl bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div> 
        </div>

    </div>
}

export default ProjectItem;