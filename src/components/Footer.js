import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import axios from "axios"

const Footer = ({ forwardedRef }) => {

    const [viewCount, setViewCount] = useState(0)

    useEffect(() => {
        axios.get('https://api.countapi.xyz/hit/apuska.netlify/viewCount')
            .then(result => setViewCount(result.data.value))
    }, [])

    return (
        <div ref={forwardedRef} className="h-52 bg-green-700 relative rounded-md m-5 flex items-center justify-evenly">
            <div className="flex flex-col items-center">
                <h1 id="foot" class="ml-2 text-black">&copy; 2022 Aid Puska</h1>
                <div className="flex gap-1">
                    <p>Page visits: </p>
                    <div className="bg-white px-1 rounded-sm">{viewCount}</div>
                </div>
            </div>

            <div className="w-36">
                <h3>Portfolio created with: </h3>
                <div className="gap-5 mt-2">
                    <img className='inline w-16 h-12' src="https://reactjs.org/logo-og.png" alt="" />
                    <img className='inline w-16 h-12' src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png" alt="" />
                    <img className="inline w-16 h-12" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogosandtypes.com%2Fwp-content%2Fuploads%2F2021%2F04%2FFramer-Motion.png&f=1&nofb=1&ipt=dba1b4db97041c298d741a0b654e46602dafb0e767d116099d85341a64543062&ipo=images" alt="" />
                </div>
            </div>
        </div>
    )

}

export default Footer