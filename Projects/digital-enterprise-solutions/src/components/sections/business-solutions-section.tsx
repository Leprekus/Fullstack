import React from 'react'
import SectionLayout from '../layouts/section-layout'

export default function BusinessSolutionsSection() {
  return (
    <SectionLayout>
        <h1>Digital Business Solutions</h1>

        <div>
            <h2>Business Suite</h2>
            <p>We offer a suite of software 
               designed to assist you in every aspect 
               of your business, increasing customer satisfaction
               and decreasing bottlenecks.
            </p>
        </div>
        <div>
            <h2>Capabilities</h2>
            <p>Our suite of software encompasses a wide array of capabilities, including:
            </p>
                <ul>
                    <li>Microphone Noise Cancellation</li>
                    <li>Background Noise Cancelaltion</li>
                    <li>Transcripts</li>
                    <li>Screen Recording</li>
                    <li>File Sharing</li>
                </ul>
        </div>

        <div>
            <h2>Custom Development</h2>
            <p>As part of our mission to set businesses for success
               we provide elegant solutions to complex problems uniquely 
               tailored to your needs. 
            </p>
        </div>
    </SectionLayout>
  )
}
