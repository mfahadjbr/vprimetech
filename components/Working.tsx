import { Box } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: "Experienced",
    description: "Our team is composed of members who have years of experience in their area"
  },
  {
    title: "Dedicated",
    description: "vPrime Tech team will go above and beyond to get you what you need"
  },
  {
    title: "Dependable",
    description: "Dependability is in the very core of our business model and you'll experience it"
  },
  {
    title: "Competitive Rates",
    description: "We work with our partners to get you what you need quickly and at the lowest cost"
  },
  {
    title: "Free Consultation",
    description: "Having a good grasp of what you need to succeed is as important to us as it is to you"
  },
  {
    title: "Creativity",
    description: "Working together to design infrastructure that maximizes growth & productivity"
  },
  {
    title: "Ambitious",
    description: "We understand your growth ambitions & we provide you with tools to accomplish them"
  }
]

export default function Component() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          What's it like working with us?
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We work with you to understand your security, storage, licensing, software, and cloud needs. 
          Our expertise in the field allows us to recommend a tailored solution towards your end goal.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600">
              <Box className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
          <div className="bg-blue-600 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <Box className="h-10 w-10 text-white mb-4" />
              <h3 className="text-lg font-medium mb-2">Ready for maximum productivity & growth?</h3>
            </div>
            <Link href="/contact" passHref>
              <button className="mt-4 bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}