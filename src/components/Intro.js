import nate from '../assets/nate.jpg'
import github from '../assets/github-svgrepo-com.svg'
import linkedin from '../assets/linkedin.svg'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import down from '../assets/goDown.png'
import image from '../assets/image.jpg'

const buttonVariants = {
    hover: {
        y: 20,
        transition: {
            yoyo: Infinity,
        }
    },
    hidden: {
        y: -900
    },
    visible: {
        y: 0
    }
}

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
            staggerDirection: 1,
        },
    },
}

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
    }
}

const Intro = ({ projectRef, footerRef, skillsRef }) => {

    const handleClick = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // text reveal effect
    const text = "Hi i'm Aid Puška Full stack developer.";

    return (
        <div className="grid grid-cols-1 justify-items-center place-content-center relative h-screen">
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={nate} className="object-cover h-screen w-full" alt="" />
            <Navbar projectRef={projectRef} footerRef={footerRef} skillsRef={skillsRef} />
            <div className="absolute top-[50%] md:top-[58%]">
                <motion.h1
                    animate='visible'
                    initial='hidden'
                    variants={sentence}
                    className=" bg-gradient-to-r from-green-700 to-[#192030] rounded p-2 text-[#ffeaee] self-center text-2xl md:text-2xl drop-shadow-lg "
                >
                    {text.split('').map((char, index) => {
                        return (
                            <motion.span key={char + '-' + index} variants={letter} transition={{
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 1,
                                repeatDelay: 2
                            }}>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.h1>
            </div>


            <div className='absolute top-[35%] md:top-1/3 '>
                <img src={image} className='w-28 h-28 rounded-full' alt="" />
                <motion.div
                    initial={{ y: -450 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="absolute top-[70%] ml-6"
                >
                    <motion.a target="_blank" rel="noopener noreferrer" href="https://github.com/AidPuska" ><img src={github}
                        className="inline rounded-full bg-green-700 " alt="" /></motion.a>
                    <motion.a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aid-puska-52b69b251" ><img src={linkedin}
                        className="inline ml-3 bg-green-700 rounded-full text-white" alt="" /></motion.a>
                </motion.div>
            </div>

            {/* <motion.button
                variants={buttonVariants}
                whileHover='hover'
                className='absolute left-1/2 top-[85%]'
                onClick={handleClick}
                initial='hidden'
                animate='visible'
                transition={{ delay: 1, type: 'spring', duration: 0.5 }}
            >
                <img src={down} className='w-12 h-12' alt="" />
            </motion.button> */}
            <button className='absolute left-1/2 top-[85%]' onClick={handleClick}>
                <img src={down} className='w-12 h-12 hover:animate-bounce' alt="" />
            </button>
        </div>
    )
}

export default Intro