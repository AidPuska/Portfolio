import React, { useEffect, useRef } from 'react'

const Skills = ({ forwardedRef }) => {

    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);

    // canvas
    useEffect(() => {
        const context1 = canvasRef1.current.getContext('2d');
        //draw
        context1.lineTo(0, 150)
        context1.moveTo(100, 0)
        context1.strokeStyle = '#ffffff'
        context1.stroke()

        const context2 = canvasRef2.current.getContext('2d');
        context2.lineTo(100, 150)
        context2.moveTo(0, 0)
        context2.strokeStyle = '#ffffff'
        context2.stroke()
    }, [])

    //


    return (
        <div ref={forwardedRef} className='w-full flex relative justify-center py-10 bg-black/95'>
            <div className='text-[#ffeaee] text-center'>
                <h1 className='mb-5 text-xl font-light'>Skills:</h1>
                <ul className='flex gap-10 justify-center text-md font-light'>
                    <li>React</li>
                    <li>MongoDB</li>
                </ul>
                <ul className='flex gap-14 mt-4 justify-center'>
                    <li>NodeJS</li>
                    <li>TailwindCSS</li>
                </ul>

                <ul className='flex gap-28 mt-4 justify-center text-lg font-medium'>
                    <li>Express</li>
                    <li>Firebase</li>
                </ul>

                <p className='font-light'>________________________________</p>

                <canvas width='100px' height='150px' className='hidden md:block absolute top-12 left-[38%] shadow-sm shadow-black/50' ref={canvasRef1}></canvas>
                <canvas width='100px' height='150px' className='hidden md:block absolute top-12 right-[38%] shadow-sm shadow-black/50' ref={canvasRef2}></canvas>
            </div>
        </div>
    )
}

export default Skills