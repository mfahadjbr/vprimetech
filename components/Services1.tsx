import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

interface ServiceProps {
  title: string
  description: string
  imageSrc: string
  link: string
}

const Service: React.FC<ServiceProps> = ({ title, description, imageSrc, link }) => (
  <Card className="flex flex-col overflow-hidden">
    <div className="relative w-full h-48">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="fill"
      />
    </div>
    <CardHeader>
      <h3 className="text-xl font-semibold">{title}</h3>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter>
      <Button asChild className="w-full">
        <a href={link}>Learn More</a>
      </Button>
    </CardFooter>
  </Card>
)

export default function ServicesSection() {
  const services = [
    {
      title: "Software Procurement",
      description: "The experience, buying power, and negotiation skills our team bring to the table ensures that you get the software(s) you need inexpensively and in a timely fashion.",
      imageSrc: "/4.jpeg",
      link: "/services/software-procurement"
    },
    {
      title: "Cloud Migration",
      description: "Our Cloud Migration services allow you to secure your data, maximize your productivity, improve agility, and eradicate complexity & vulnerability.",
      imageSrc: "/2.jpeg",
      link: "/services/cloud-migration"
    },
    {
      title: "Tailored Solutions",
      description: "With employees working from home cyber-security, and storage can be a much more significant challenge. We can work with you to find a tailored solution.",
      imageSrc: "/9.png",
      link: "/services/tailored-solutions"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}