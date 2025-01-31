'use client'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <section className='container mx-auto mb-8 text-white' id="about">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
            About Us
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full aspect-video p-4 lg:w-1/2'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CiFoHm7HD94?si=hN_vtsxLnCUvZzF5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>


            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
              hidden: {}
            }}
            className='w-full px-2 lg:w-1/2'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl tracking-tighter lg:text-6xl'>
            {/* {ABOUT.header} */}
            We Love to Help
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3'></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='m-8 text-2xl leading-relaxed tracking-tighter lg:max-w-xl'>
                {/* {ABOUT.content} */}
                We are India's most trusted and transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us.
                </motion.p>
        </motion.div>
        </div>
    </section>
  )
}

export default About
