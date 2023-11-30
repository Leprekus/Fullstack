import React from 'react'
import SectionLayout from '../layouts/section-layout'

export default function CapabilitiesSection() {
  return (
    <SectionLayout>
    <h1 className="text-5xl font-bold text-center">Capabilities</h1>
    {/* <div>
        <h2>Competitive Research</h2>
        <p>Our research process provides with an analysis of direct and adjacent competitors and data-driven observations.
        analysis, we unlock key insights that drive our recommendations and are able to uncover and provide
        valuable opportunites     
        </p>
    </div> */}

    <div>
        <h2>Collborative Process</h2>
        <p> Our approach of close collaboration allows our team to ensure 
            that our insights aligns with the business&apos; objectives.
        </p>
    </div>

    <div>
        <h2>Accessibility</h2>
        <p> At [business name] inclusiveness is at the core of our values. We
            ensure that all of our products are accesible, thus
            accessibility takes a high priority in our development process.
        </p>
    </div>

    <div>
        <h2>Business Solutions</h2>
        <p> 
            talk about the software developed
        </p>
    </div>
   
  </SectionLayout>
  )
}
