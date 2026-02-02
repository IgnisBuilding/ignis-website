'use client'

import React from 'react'
import Image from 'next/image'

export const Icon: React.FC = () => {
  return (
    <Image
      src="/ignis-logo.png"
      alt="IGNIS"
      width={32}
      height={32}
      style={{ objectFit: 'contain' }}
    />
  )
}

export default Icon
