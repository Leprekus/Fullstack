import React from 'react'
import Button from '../ui/Button'
import SectionLayout from '../layouts/section-layout'

export default function LandingSection() {
  return (
    <SectionLayout>
      <h1 className="text-5xl font-bold text-center">Showcase your Brand With Us</h1>
      <div className="flex gap-4 justify-center">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
      <p className="text-justify">Harness the power of the internet and expand your reach. Here
      at [insert name] we specialize in making your business grow.Captivate 
      your audience, enhance user experiences, and drive meaningful results.
      </p>
    </SectionLayout>
  )
}
