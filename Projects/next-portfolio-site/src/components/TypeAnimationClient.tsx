'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeAnimationClient() {
  return (
    <TypeAnimation
          sequence={[
            'Frontend Developer', 1000,
            'Rock', 1000,
            'Team Player', 1000,
            'Goal Oriented Person', 1000
          ]}
          wrapper='span'
          cursor={false}
          repeat={1}
  
          />
  )
}

export default TypeAnimationClient