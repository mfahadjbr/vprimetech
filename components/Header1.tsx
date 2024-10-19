import { Phone, Clock } from 'lucide-react'
import Link from 'next/link'


export default function Header() {

  return (
    <header className="w-full bg-white shadow-md py-4 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm">(833) 333-1314</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm">M - F: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
        
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          <Link href={'./contact'}>Free Consultation</Link>
        </button>
      </div>
    </header>
  )
}