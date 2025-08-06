// components/H1group.tsx
import React from 'react'

type Props = {
  eyebrow: string
  heading: string
}

export const H1group: React.FC<Props> = ({ eyebrow, heading }) => (
  <hgroup>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{heading}</h2>
  </hgroup>
)