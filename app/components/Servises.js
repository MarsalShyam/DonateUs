import React from 'react'
import ServisesCard from './ServisesCard'
import { SERVISES } from '../constants'
// import {DISHES} from "../constants"
// import DishCard from './DishCard'

const Servises = () => {
  return (
    <section className=' container mx-auto py-16' id="services">
        <h2 className='mb-8 text-orange-500 text-center text-3xl tracking-tighter lg:text-4xl'>
            Our Services
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center m-10'>
            {SERVISES.map((project,index)=>(
                <ServisesCard key={index} project={project}/>
            ))}
        </div>
    </section>
  )
}

export default Servises
