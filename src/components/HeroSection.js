import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion'

export default function HeroSection() {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    const animateImg = {
        visible: { opcacity: 1, scale: 1, y: 0 },
        hidden: { opcacity: 0, scale: 0.25, y: 25 }
    }
    const animateText = {
        visible: { opcacity: 1, scale: 1, y: 0 },
        hidden: { opcacity: 0, scale: 0.90, y: 30 }
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        else {
            controls.start('hidden')
        }
    }, [inView, controls])


    return (

        <>

            <div ref={ref}></div>
            <div className='pt-5 bg-green' style={{ paddingBottom: '65px' }}>
                <div className="container content-center">
                    <div className="row align-items-center">

                        <motion.div variants={animateText} animate={controls} transition={{ duration: 2, delay: 0.25 }}
                            initial='hidden' className="col-12 col-md-6 px-4 px-lg-5">
                            <h2 className='fw-bold text-light'>Find Your Perfect Rental Solution</h2>
                            <p className='text-white'>Welcome to our comprehensive rental platform, where you
                                can find everything you need in one place. We have a wide range of options available
                                for you to rent so, Browse our extensive collection and make renting a convenient
                                and hassle-free experience for all your needs.</p>
                            <Link to='/products' className='btn btn-light text-green mt-2'>GET STARTED</Link>
                        </motion.div>

                        <motion.div variants={animateImg} animate={controls} transition={{ duration: 2, delay: 0.25 }}
                            initial='hidden' className="col-12 col-md-6 text-center mt-5 mt-md-0">
                            <img className='home-imge' src="/assets/images/rent.png" alt="home" loading="lazy" style={{ width: '90%', borderRadius: '5%' }} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    )
}
