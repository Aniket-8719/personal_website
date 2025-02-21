import React from 'react'
import profile from "../Assest/resume photo.png"

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center'>
        <div>
            <img
            src={profile}
            alt='profile'
            className='w-64 h-64 rounded-full border-4 border-purple-400'
            />
            <div>
                <h2>
                    Frontend Developer
                </h2>
                <p>Passionate about creating beautiful and functionality web experiences</p>
            </div>

        
        </div>
      
    </section>
  )
}

export default Hero
