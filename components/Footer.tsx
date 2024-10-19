import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" alt="vPrime Tech Logo" width={300} height={50}/>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <p>We are committed to revolutionizing the workplace to ensure maximum productivity and seamless integration.</p>
            <Button asChild className="mt-4 hover:bg-white hover:text-black ">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li><Link href="/services/software-procurement">Software Procurement</Link></li>
              <li><Link href="/services/cloud-migration">Cloud Migration</Link></li>
              <li><Link href="/services/tailored-solutions">Tailored Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <p>1400 Broadfield Boulevard Suite 200</p>
            <p>Houston, TX 77084</p>
            <p>Tel: (833) 333-1314</p>
            <p>E-mail: sales@vprimetech.com</p>
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
    <div className='flex items-center justify-center'>
    <div className=" text-black py-4 text-center">
        <p>&copy; 2024 vPrime Tech. All rights reserved.</p>
    </div>
    </div>
    
    </>
  )
}

export default Footer