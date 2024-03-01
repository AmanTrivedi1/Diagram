import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
  <div>
<section className="bg-black h-full text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-[#EC2C40] via-[#00A9E5] to-[#EC2C40] bg-clip-text  sm:text-5xl  text-4xl font-extrabold text-transparent ">
          Understand User Flow.
        <span className="sm:block"> Create your dacumantation that everyone need </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl sm:text-base/relaxed text-sm/relaxed ">
        Welcome to our revolutionary platform designed to streamline your project documentation process. With our intuitive interface, you can effortlessly create detailed flow diagrams, charts, and much more. Say goodbye to scattered notes and disjointed planning – our tool
        empowers you to consolidate your ideas into cohesive.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button className='bg-zinc-50 text-black px-10 hover:bg-zinc-100 over:bg-black'>Learn More</Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
