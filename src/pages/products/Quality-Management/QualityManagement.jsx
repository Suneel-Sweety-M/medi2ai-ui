import React from 'react'
import Hero from './Hero'
import Results from './Results'
import Charts from './Charts'
import Choose from '../../Who-We-Serve/Choose'

const QualityManagement = () => {
  return (
    <div>
          <Hero/>
        <Results/>
        <Charts/>
        <div className="max-w-7xl mx-auto ">
                  <Choose/>

       </div>
    </div>
  )
}

export default QualityManagement