'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const SLIDE_COUNT = 4
const AUTO_PLAY_INTERVAL = 4000 // 4 seconds

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, AUTO_PLAY_INTERVAL)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
      clearInterval(autoplay)
    }
  }, [emblaApi, onSelect])

  const slides = [
    {
      image: '/3.jpg',
      title: 'Innovative & Competitive',
      description: 'Always there when you need us',
      paragraph: 'Infrastructure Strategies, Digital Workplace Solutions & Software-Defined Business Transformation Made Easy'
    },
    {
      image: '/2.jpg',
      title: 'Knowledgeable & Available',
      paragraph: 'Our team of highly trained associates work with you to find solutions tailored towards your end goal while keeping the cost minimal.'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'World-Class Software Expertise',
      paragraph: 'We are committed to revolutionizing the workplace to ensure maximum productivity and seamless integration.'
    }
  ]

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-[0_0_100%] min-w-0">
            <Image
              src={slide.image}
              alt={slide.title}
              width={1600}
              height={900}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-2">{slide.description}</p>
              <p className="text-md">{slide.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
