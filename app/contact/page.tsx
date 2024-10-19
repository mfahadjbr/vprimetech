import { Button } from '@/components/ui/button'
import Contact1 from '@/components/Contact1'
export default function Contact() {
  return (
    <>
    <Contact1/>
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="md:w-1/2 mx-auto">
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
    </>
  )
}