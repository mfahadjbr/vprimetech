import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Header1 from '@/components/Header1'
import Carousel1 from '@/components/Carousel1'
import Services1 from '@/components/Services1'
import Faq from '@/components/Faq'
import Working from '@/components/Working'
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header1/>
      <Carousel1/>
      <Services1 />
      <Faq />
      <Working />

      {/* Partners Section */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* VMware */}
          <div className="flex items-center justify-center">
            <Image src="/10.png" alt="VMware logo" width={150} height={75} />
          </div>
          {/* McAfee */}
          <div className="flex items-center justify-center">
            <Image src="/11.png" alt="McAfee logo" width={150} height={75} />
          </div>
          {/* Commvault */}
          <div className="flex items-center justify-center">
            <Image src="/12.png" alt="Commvault logo" width={150} height={75} />
          </div>
          {/* SecureWorks */}
          <div className="flex items-center justify-center">
            <Image src="/13.png" alt="SecureWorks logo" width={150} height={75} />
          </div>
          {/* Fortinet */}
          <div className="flex items-center justify-center">
            <Image src="/14.png" alt="Fortinet logo" width={150} height={75} />
          </div>
          {/* Adobe */}
          <div className="flex items-center justify-center">
            <Image src="/15.png" alt="Adobe logo" width={150} height={75} />
          </div>
          {/* Red Hat */}
          <div className="flex items-center justify-center">
            <Image src="/16.png" alt="Red Hat logo" width={150} height={75} />
          </div>
          {/* Veeam */}
          <div className="flex items-center justify-center">
            <Image src="/17.png" alt="Veeam logo" width={150} height={75} />
          </div>
        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <Carousel>
            <CarouselContent>
              {[
                { name: 'Chris Hogan', role: 'CEO - LC Design', image: '/chris.png', quote: 'I have worked with Jan for many years now. His advice has allowed us to best spend our IT budget and has maximized productivity. Working with him we have been able to achieve our security and licensing ambitions and he is always there to help.' },
                { name: 'Steve Erlich', role: 'Partner - Law Firm', image: '/steve.jpg', quote: 'Covid-19 made remote working very hectic for our law firm. After a few Zoom meetings with vPrime Tech Team and adapting their suggested solutions, things are working rather smooth, and we are happy with what we have accomplished together.' },
                { name: 'David Eylers', role: 'CEO - Orthodontics', image: '/ceo.jpg', quote: 'The team that represents vPrime has been extremely helpful. They have been able to provide us with the best IT solutions for our business and have been a great resource for us.' },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg">
                    <Image src={testimonial.image} alt={testimonial.name} width={150} height={150} className="rounded-full mb-4 md:mb-0 md:mr-6" />
                    <div>
                      <p className="italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Who does vPrime Tech work with?</h2>
              <p className="mb-4">We work with private businesses as well a federal, state and local governments. In addition to that we also work with educational institutes to meet their technology needs. We are located in Texas but after Covid-19 we will also expand our business to the New England region.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">174</p>
                  <p>Happy Clients in US have worked with us and have been extremely happy with the outcome.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">221</p>
                  <p>Projects completed on time and on budget with a high level of customer satisfaction.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">147440</p>
                  <p>Working Hours with enthusiasm and passion to deliver outstanding service.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Request a quick quote or free consultation</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Subject" className="w-full p-2 border rounded" />
                <textarea placeholder="Message" rows={4} className="w-full p-2 border rounded"></textarea>
                <select className="w-full p-2 border rounded">
                  <option value="">--Please choose an option--</option>
                  <option value="quote">Request a quote</option>
                  <option value="consultation">Request a consultation</option>
                </select>
                <input type="file" className="w-full p-2 border rounded" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}