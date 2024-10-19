'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How do I know which software best suits my needs?",
    answer: "Members of our team can work with you, identify your individual needs and make recommendations based on the constraints you provide, ensuring maximum productivity with minimal cost."
  },
  {
    question: "What is the advantage of using Cloud services?",
    answer: "Businesses spend quite a bit to get a little more efficiency, storage, and processing power. Servers and applications are rapidly moving to the cloud to meet the needs of employees and customer demand."
  },
  {
    question: "Which Cloud service is better and why?",
    answer: "Depending on your needs, one cloud service may be more beneficial for you than the other. Schedule a free consultation, and we will gladly listen to your needs and recommend a solution."
  },
  {
    question: "Which Cybersecurity solution would best protect our business?",
    answer: "The partners we work with are known for their world-class cybersecurity. They are there to ensure no incident takes place. We work together with them to find you a tailored solution that projects what is important to you."
  }
]

export default function Component() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="/1.jpeg"
          alt="Team collaboration"
          className="w-full md:w-1/2 h-auto rounded-2xl"
          width={350}
          height={300}
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Who is behind the team and FAQs</h2>
          <p className="text-gray-600">
            The employees who are a part of this team have their area of expertise and skill set. 
            Depending on what we are working on for you, we tag in the team member who can give 
            you the best answers and find you the best solutions.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
