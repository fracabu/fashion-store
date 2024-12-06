'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop"
          alt="Fashion collection"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Nuova Collezione
              <span className="block text-2xl md:text-3xl mt-2">
                Autunno/Inverno 2024
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Scopri le ultime tendenze della moda con la nostra nuova collezione. 
              Design esclusivi che uniscono stile e comfort.
            </p>
            <div className="space-x-4">
              <Link 
                href="/new-collection" 
                className="inline-block px-8 py-4 bg-white text-black hover:bg-white/90 transition duration-200"
              >
                Scopri di più
              </Link>
              <Link 
                href="/collections" 
                className="inline-block px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 transition duration-200"
              >
                Collezione
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full p-2">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero