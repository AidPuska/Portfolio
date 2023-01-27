import { useEffect, useRef, useState } from "react"
import Footer from "../../components/Footer"
import Intro from "../../components/Intro"
import Projects from "../../components/Projects"
import goUp from '../../assets/goup.svg'
import Skills from "../../components/Skills"


const Home = () => {
    const projectRef = useRef(null)
    const footerRef = useRef(null)
    const skillsRef = useRef(null)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            console.log(footerRef.current)
        }, 2000)
    }, [])

    const toggle = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }

    }

    const toTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggle)

        return () => {
            window.removeEventListener('scroll', toggle)
        }
    }, [])




    return (
        <div>
            <Intro projectRef={projectRef} footerRef={footerRef} skillsRef={skillsRef} />
            <Projects forwardedRef={projectRef} />
            <Skills forwardedRef={skillsRef} />
            <Footer forwardedRef={footerRef} />

            {isVisible && <div onClick={toTop} className="fixed bottom-5 md:bottom-1 right-5 md:right-1 cursor-pointer"><img className="w-10 h-10" src={goUp} alt="" /></div>}
        </div>
    )
}

export default Home