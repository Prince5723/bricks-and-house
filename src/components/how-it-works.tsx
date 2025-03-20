import { FeatureSteps } from "@/components/blocks/how-it-works"

const features = [
    { 
      step: 'Step 1', 
      title: 'Raise A Request',
      content: 'Get started by raising a free request. Share your vision, and our experts will connect with you to understand your requirements in detail.', 
      image: 'https://images.unsplash.com/photo-1740650511417-d74239e953cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpc2UlMjBhJTIwcmVxdWVzdHxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      step: 'Step 2',
      title: 'Meet Our Experts',
      content: 'Schedule a consultation with our industry-leading experts. Discuss your ideas, preferences, and budget to align expectations perfectly.',
      image: 'https://plus.unsplash.com/premium_photo-1661765955533-596918f986f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVldCUyMGV4cGVydHN8ZW58MHx8MHx8fDA%3D'
    },
    { 
      step: 'Step 3',
      title: 'Book With Us',
      content: 'Once you’re confident, book with us to kickstart your project. Our team ensures a seamless and transparent onboarding process.',
      image: 'https://plus.unsplash.com/premium_photo-1676998931048-0794ddca7584?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2tpbmd8ZW58MHwxfDB8fHww'
    },
    { 
      step: 'Step 4',
      title: 'Receive Tailored Designs',
      content: 'Our architects will craft custom designs that align with your lifestyle and preferences, ensuring functionality meets elegance.',
      image: 'https://images.unsplash.com/photo-1509660933844-6910e12765a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvbWUlMjBkZXNpZ25zfGVufDB8MXwwfHx8MA%3D%3D'
    }, 
    { 
      step: 'Step 5',
      title: 'Track and Transact',
      content: 'Stay in control with real-time updates on the progress. Effortlessly track milestones and make secure payments with confidence.',
      image: 'https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhY2tpbmd8ZW58MHwxfDB8fHww'
    }, 
    { 
      step: 'Step 6',
      title: 'Settle Into Your Dream Space',
      content: 'Experience the joy of moving into a home crafted with care and precision, perfectly tailored to your needs and aspirations.',
      image: 'https://images.unsplash.com/photo-1522444195799-478538b28823?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0dGxlJTIwaG9tZXxlbnwwfDF8MHx8fDA%3D'
    },
  ]
  

export function HowItWorks() {
  return (
      <FeatureSteps 
        features={features}
        title="How to Get Started"
        autoPlayInterval={4000}
        // imageHeight="h-[500px]"
      />
  )
}