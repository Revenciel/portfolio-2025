// components/H1group.tsx
import React from 'react'

type Props = {
  eyebrow: string
  heading: string
}

export const H1group: React.FC<Props> = ({ eyebrow, heading }) => (
  <header>
    <p className="eyebrow">{eyebrow}</p>
    <h1>{heading}</h1>
  </header>
)