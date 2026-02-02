'use client'

import React from 'react'
import Image from 'next/image'

export const Logo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 0'
    }}>
      <Image
        src="/ignis-logo.png"
        alt="IGNIS"
        width={180}
        height={60}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  )
}

export default Logo
