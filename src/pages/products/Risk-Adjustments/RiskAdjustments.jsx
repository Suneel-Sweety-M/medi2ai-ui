import React from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import Results from './Results'
import Charts from './Charts'
import Choose from '../../Who-We-Serve/Choose'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

const RiskAdjustments = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero/>
      <Results/>
      <Charts/>
      <div className="max-w-7xl mx-auto ">
        <Choose />
      </div>
    </motion.div>
  )
}

export default RiskAdjustments