import Image from 'next/image'

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Tailored Solution</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
          <p className="mb-4">
            Our focus is always the businesses we are working with. Our goal always is providing a
            custom tailored solution to help achieve the businesses' end goals. We help you achieve
            your security, data processing, and IT infrastructure goals. There are often many
            questions and moving parts and to help you, we bring the experts to the table. Working
            together we eradicate any ambiguity and give you a clear picture of what is to be
            expected.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="mb-4">
            The team here at vPrime Tech will work with you through every step of the way to get
            you the solution that meets your needs.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Analyze IT needs together</li>
            <li>Get experts to the table from any software publisher</li>
            <li>Get you solutions that work for you both and long term</li>
            <li>Be there for you when you need us</li>
            <li>Get you what you need in time</li>
            <li>Get you the best pricing</li>
          </ul>
        </div>
        <div className="md:w-1/2 space-y-4">
          <Image
            src="/9.png"
            alt="People working together at a table"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/tail.jpeg"
            alt="Group discussion around a table"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}