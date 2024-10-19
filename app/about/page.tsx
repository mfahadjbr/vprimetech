import Image from 'next/image'
import Team from '@/components/Team'
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
        <h2 className="text-3xl font-bold text-center mb-14">About</h2>
      <header className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/about.jpeg"
              alt="Digital collaboration illustration"
              width={400}
              height={300}
              className="w-full rounded-2xl h-auto object-fill"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg">
            <blockquote className="text-sm italic">
              "We at eTranzact strive to ensure the solutions provided are tailored towards the end goals of your business needs. Capable and experienced members of our team help business owners and professionals streamline their work to achieve the best software and cloud solutions for the lowest cost possible. Software procurement and cloud enterprise is not the end, we are always right there when you need us."
            </blockquote>
            <p className="text-right mt-2">- Ian Ghalib (CEO)</p>
          </div>
        </div>
      </header>

      <main className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Mission Statement</h2>
          <p className='text-center'>Our mission is simple: to help the business we work with accomplish their IT infrastructure goals so they can run smoothly productive and do so securely.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Vision Statement</h2>
          <p className='text-center'>Through our hard work and dedication, we hope to be viewed as a respected, dependable, and desire available IT value added reseller to whom you can always go back.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Values Statement</h2>
          <p className='text-center'>Each member of our team is a team listener and they lead the industry they recommend to a high standard. We ensure you are getting the solution that will solve the problem you are currently facing, but it would be a great solution down the road and help you achieve goals you may not think.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <p className='text-center'>1405 Briarfield BLVD STE 208, Maumee TX 77584</p>
          <p className='text-center'>sales@etranzact.com</p>
          <p className='text-center'>(800) 783-3346</p>
          <p className='text-center'>Available: Monday-Friday 8:00 AM - 5:00 PM</p>
        </section>

        <Team />
      </main>
    </div>
  )
}