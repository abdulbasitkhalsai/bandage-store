'use client'

import { SanityConfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

const SanityStudio = () => {
  return (
    <NextStudio config={SanityConfig}/>
  )
}

export default SanityStudio

