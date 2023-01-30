import { useRef, useState } from "react"
import close from '../assets/close.png'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import axios from "axios"

const Footer = ({ forwardedRef }) => {

    const [opened, setOpened] = useState(false)
    const [name, setName] = useState('')
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const formRef = useRef(null)

    const handleContact = () => {
        setOpened(!opened)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ywqhepf', 'template_exzddx7', formRef.current, 'DjoIsJNRZPdoZUWUg')
            .then((res) => {
                console.log(res.text)
                setResponse('Message sent')
            }, (error) => {
                console.log(error.text)
                setError('Message failed')
            })
        setName('')
        setMessage('')
        setInterval(() => {
            setResponse(null)
            setError(null)
        }, 3000)
    }

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


            {!opened && <button onClick={handleContact} className="p-2 border border-black rounded">Contact me</button>}

            <AnimatePresence>

                {opened &&
                    <div className="fixed bottom-[1%] w-full h-screen flex flex-col justify-center items-center z-[999] bg-black/95">
                        <motion.form initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} exit={{ y: 500 }} onSubmit={sendEmail} ref={formRef} className="p-5 w-68 overscroll-none bg-green-900 text-white">

                            <div className="flex justify-between mb-5">
                                <h3 className="text-left text-xl">Contact me</h3>
                                <img alt="close-modal" onClick={handleContact} className="w-6 h-6 cursor-pointer" src={close} />
                            </div>


                            <label>
                                <h4 className="mb-1 font-light">Email:</h4>
                                <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full p-1 text-green-900" name="user_name" type="text" placeholder="email" />
                            </label>

                            <label>
                                <h4 className="mb-1 font-light mt-5">Message: </h4>
                                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className=" caret-green-700 text-green-900 p-1 w-full" name="message" id="" cols="40" rows="3" placeholder="message"></textarea>
                            </label>

                            <button className="bg-gradient-to-r from-white via-gray-300 text-green-900 p-1 w-full block rounded mt-10">Send</button>


                            {response && <div className="bg-white text-green-900 text-center rounded-md p-1">{response}</div>}
                            {error && <div className="bg-white text-red-900 text-center rounded-md p-1">{error}</div>}

                        </motion.form>
                    </div>
                }
            </AnimatePresence>

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