import React from 'react'

import Second from "./Second";
import Thirs from "./Thirs";
import Fifth from "./Fifth";
import Fourth from "./Fourth";
import First from "./First";

const BentoGrid = () => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#f7f5f0_34%,#edf2ff_100%)] py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto mb-8 max-w-7xl md:mb-10">
        
        <h2 className="mt-2 font-[heading] text-4xl md:text-6xl tracking-[-0.03em] text-black">
          Our Features
        </h2>
        
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        <First/>
        <Second />

        <Thirs />
        <Fourth />

        <Fifth />
      </div>
    </div>
  )
}

export default BentoGrid