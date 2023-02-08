import { motion } from "framer-motion"
import desc from '../assets/desc.svg'
import title from '../assets/title.svg'
import { InView } from "react-intersection-observer"
import { projects } from "../data"


const Projects = ({ forwardedRef }) => {

    //const defImage = 'https://i.stack.imgur.com/mwFzF.png'


    return (
        <div ref={forwardedRef} className="w-full h-fit flex items-center back justify-center">
            <div className="md:flex flex-wrap justify-evenly mx-2">
                {projects.map((project, index) => (
                    <InView>
                        {({ ref, inView }) => (
                            <motion.div
                                initial={{ opacity: 0.5, scale: 0.5, }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.5 }}
                                transition={{ duration: 0.8 }}
                                ref={ref}
                                key={index}
                                className="shadow-md bg-white shadow-black/50 rounded-sm flex flex-col items-center mx-0 md:mx-6 my-16 p-4 gap-4 border-black"
                            >
                                <motion.p className="text-2xl w-full text-center font-medium border-bot border bg-green-500 p-1 border-green-800 flex items-center justify-center"><img src={title} className='w-4 h-4' alt="" />{project.name}</motion.p>
                                <motion.p className="text-lg font-light text-center w-[300px] md:w-[360px] flex items-center"><img src={desc} className='w-4 h-4' alt="" />{project.desc}</motion.p>

                                <motion.img className="w-[300px] md:w-[365px] h-52 md:h-[300px] border border-green-800 rounded object-cover" src={project.img} alt='project_image' />

                                <motion.p className="w-[300px] md:w-[350px]">Made with: {project.madeWith}</motion.p>
                                <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="w-[300px] md:w-[350px] text-green-600">{project.link}</motion.a>
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>
        </div>
    )
}

export default Projects