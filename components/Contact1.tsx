import { Mail, Phone, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="py-10 bg-white mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Houston</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-6 mt-16">
            <div>
              <p className="text-lg font-semibold">1400 Broadfield Boulevard Suite 200</p>
              <p className="text-lg">Houston, TX 77084</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-600" />
              <p className="text-lg">Tel: (833) 333-1314</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href="mailto:sales@vprimetech.com" className="text-lg text-blue-600 hover:underline">
                E-mail: sales@vprimetech.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <p className="text-lg">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5376727380396!2d-95.6079248!3d29.7891042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640db2cc08b3f9f%3A0x5b9025f355374f56!2s1400%20Broadfield%20Blvd%20%23200%2C%20Houston%2C%20TX%2077084!5e0!3m2!1sen!2sus!4v1652795714619!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}