import Image from "next/image";

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2 pt-12'>
            <div className='max-w-[1440px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl pt-6 tracking-widest text-blue-600'>Skills</p>
                <h2 className='py-4'>What I Like To Use</h2>
                <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-8'>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/html.png'} alt='HTML5' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    HTML5
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/css.png'} alt='CSS' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    CSS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/tailwind.png'} alt='TailwindCSS' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    TAILWINDCSS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/javascript.png'} alt='JavaScript' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    JAVASCRIPT
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/typescript.png'} alt='TypeScript' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    TYPESCRIPT
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/react.png'} alt='React' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    REACT
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/Zustand.png'} alt='Zustand' width='115' height='80' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    ZUSTAND
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/redux.svg'} alt='Redux' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    REDUX
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/nextjs.png'} alt='Next.js' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    NEXT.JS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/node.png'} alt='Node.js' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    NODE.JS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/python.svg'} alt='Python' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    PYTHON
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/flask.svg'} alt='Flask' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    FLASK
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/sequelize.svg'} alt='Sequelize' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    SEQUELIZE
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/Prisma.png'} alt='Prisma' width='58' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    PRISMA
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/postgresql.svg'} alt='PostgreSQL' width='58' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    POSTGRESQL
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/mongoDB.png'} alt='MongoDB' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    MONGODB
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/supabase.png'} alt='Supabase' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    SUPABASE
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/docker.svg'} alt='Docker' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    DOCKER
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/vercel2.png'} alt='Vercel' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    VERCEL
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 bg-white border border-gray-200 rounded-xl hover:scale-105 transition-transform duration-300'>
                        <div className='grid grid-col-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'/github.png'} alt='GitHub' width='64' height='64' />
                            </div>
                            <div>
                                <h3 className='flex flex-col items-center justify-center'>
                                    GITHUB
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
