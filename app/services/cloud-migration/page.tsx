import Image from 'next/image'

export default function Component() {
  return (
    <div className="bg-white h-full p-4 md:p-8 mt-24">
      <div className="max-w-6xl mx-auto bg-white overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-10">Cloud Migration</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 md:p-8">
            <Image
              src="/2.jpeg"
              width={400}
              height={400}
              alt="Cloud Migration Illustration"
              className="w-full rounded-2xl h-auto"
            />
          </div>
          <div className="md:w-1/2 p-4 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
            <p className="text-sm mb-4">
              Companies have started to realize that investing in hardware, troubleshooting, and
              upgrading is not cost-effective. But migrating to cloud services is also challenging on
              many levels, and underestimating the migration difficulty can have many adverse effects.
              We bring in professionals who can help every step of the way and set the whole process
              for success. The expertise we bring to the table gives you a better picture of what is to be
              expected, what each step looks like, and what a successful transition would mean for your
              company. In addition to deploying new cloud infrastructure, we can also help with the
              existing one. We can help you create a roadmap that avoids barriers, makes it easier and
              faster to adapt to the changes, and gives you a setup that meets or exceeds your
              expectations regarding performance and processing power.
            </p>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-sm mb-4">
              We bring you the benefit, each with over 20 years experience. we know exactly what is
              required, and when it needs to be done.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Cloud migration expertise you can rely on</li>
              <li>Solutions that align with your roadmap</li>
              <li>Avoiding barriers and accelerating adaptation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}