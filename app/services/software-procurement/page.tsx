import Image from 'next/image'
import { Check } from 'lucide-react'

export default function SoftwareProcurement() {
  return (
    <section className="py-12 bg-white mt-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Software Procurement</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className=" rounded-2xl overflow-hidden">
            <Image
              src="/lo.png"
              alt="Cloud computing illustration"
              width={300}
              height={300}
              className="w-full object-fill h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
            <p className="text-gray-600">
              Reliance on software throughout the business community is increasing rapidly. 
              Operational and management challenges stemmed from alternative solutions are 
              increasingly compelling companies to move towards software solutions. Working with a 
              value-added reseller like us makes it easy for companies to determine what they need, 
              makes it less ambiguous how and when software would be delivered to them. 
              Additionally, working with us, businesses have a more clear picture of the cost associated 
              with software deployment and challenges. Having the right software allows these 
              businesses to transition from business inhibitor to business enabler and allows their 
              employees to be more productive. The ever-changing demands from clients can often be 
              challenging, and the software world is continuously evolving to equip their clients with 
              tools that will set these businesses up for success.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="mb-4">
              We work closely with the end businesses' IT team, their CIO and the software publishers 
              to ensure they provide the best service to the business, allowing them to adapt to the 
              latest technology without any hiccups.
            </p>
            <ul className="space-y-2">
              {[
                'Highly professional, skilled & experienced staff',
                'Passionate about getting you what you need and quickly',
                'World-class service and expertise',
                'On time and on budget'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/log.png"
              alt="Technical support illustration"
              width={300}
              height={300}
              className="w-full rounded-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}