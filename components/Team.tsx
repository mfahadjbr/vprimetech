const teamMembers = [
    {
      name: 'Jan Ghalib',
      title: 'CEO',
      description: 'Jan Ghalib is the CEO of the company and has assembled this capable team.',
    },
    {
      name: 'Adrian Kimbel',
      title: 'Marketing Specialist',
      description: 'Adrian brings a wealth of partnering & marketing knowledge to the team.',
    },
    {
      name: 'Ron Ghalib',
      title: 'Sales & Partners Specialist',
      description: 'Ron has been a key member of the sales and partnering team since day one.',
    },
    {
      name: 'Simon Hemingway',
      title: 'CFO',
      description: 'Simon has been the mind behind our nationwide presence and our ambition to work globally.',
    }
  ]
  
  export default function Component() {
    return (
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-gray-200 hover:bg-gray-400 transition-colors duration-300 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-gray-600 text-center mb-2">{member.title}</p>
                <p className="text-sm text-center">{member.description}</p>
                <div className="w-16 h-1 bg-blue-500 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  