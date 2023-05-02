import Image from "next/image"

const Skills = () => {
    return(
        <div id='skills' className='w-full lg:h-screen p-2 pt-12'>
            <div className='max-w-[1440px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl pt-6 tracking-widest text-blue-600'>Skills</p>
                <h2 className='py-4'>What I Use</h2>
                <div className='grid md:grid-cols-5 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/html.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                HTML
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl  rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/css.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                CSS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/javascript.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                               JAVASCRIPT
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/typescript.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                               TYPESCRIPT
                            </h3>
                        </div>
                    </div>
                </div>
               
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/react.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                REACT
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/Zustand.png'} alt='/' width='115' height='80'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                ZUSTAND
                            </h3>
                        </div>
                    </div>
                </div>
             
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/node.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                NODE.JS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/nextjs.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                NEXT.JS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/tailwind.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                TAILWINDCSS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/github.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                GITHUB
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/prisma.png'} alt='/' width='58' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                              PRISMA
                            </h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/MongoDB.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                              MONGODB
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/supabase.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                SUPABASE
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/firebase.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                FIREBASE
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl '>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/vercel2.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                VERCEL
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl'>
                    <div className='grid grid-col-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={'/linear.png'} alt='/' width='64' height='64'/>
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>
                                LINEAR
                            </h3>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Skills