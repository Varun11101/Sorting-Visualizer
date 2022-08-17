import React from 'react'

export default function Stats({scount, comps, sz}) {
  return (
    <div className="stats">
        <span className="statElement">Size - <span className="statNumber">{sz}</span></span>
        <span className="statElement">|</span>
        <span className="statElement">Swaps - <span className="statNumber">{scount}</span></span>
        <span className="statElement">|</span>
        <span className="statElement">Comparisons - <span className="statNumber">{comps}</span></span>
    </div>
  )
}
