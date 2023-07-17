import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/arrayDestruct.jpg'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
                <div>
                    <img src={reactWeather} alt="" />
                    <div>
                        <button>
                            Demo
                        </button>
                        <button>
                            Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio