import React from 'react'
import { projects } from '../data'
import on from '../assets/on.png'
import off from '../assets/off.png'

const Project = ({ changeStyle, setChangeStyle, forwardedRef }) => {

    const handleClick = () => {
        setChangeStyle(!changeStyle)
    }

    return (
        <div ref={forwardedRef} className='mx-20 relative'>

            {changeStyle
                ?
                <div className='absolute top-2 right-5 flex gap-2 items-center'>
                    <p>Change projects style: </p>
                    <img className='w-8 h-8 object-cover cursor-pointer ' onClick={handleClick} src={on} alt='Project on/off' />
                </div>
                :
                <div className='absolute top-2 right-5 flex gap-2 items-center'>
                    <p>Change projects style: </p>
                    <img className='w-8 h-8 object-cover cursor-pointer' onClick={handleClick} src={off} alt='Project on/off' />
                </div>
            }

            {projects.map(project => (
                <article className='flex m-10 mt-16 gap-10 odd:flex-row-reverse' key={project.id}>
                    <div className='relative group'>
                        <span className='bg-green-600 w-[400px] h-[480px] absolute top-5 right-5 -z-10 group-hover:top-0 group-hover:right-0 transition ease-in-out duration-300'></span>
                        <img className='w-[400px] h-[480px] object-cover' src={project.img} alt="Project main" />
                    </div>

                    <div className='p-10 space-y-10 mr-10'>
                        <h1 className='font-bold text-2xl'>{project.name}</h1>
                        <p className='font-light w-80 py-5 tracking-wide leading-loose text-justify first-letter:text-5xl first-letter:font-bold first-letter:mr-2'>{project.desc}</p>
                        <p className='pb-10 w-[335px]'>Made with: {project.madeWith}</p>
                        <a href={project.link} target='_blank' rel="noreferrer" className='underline cursor-pointer text-green-600 decoration-black'>{project.link}</a>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Project