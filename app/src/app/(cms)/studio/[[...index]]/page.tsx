'use client'

import { SanityCOnfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

const SanityStudio = () => {
  return (
    <NextStudio config={SanityCOnfig}/>
    // <NextStudio config={Sanity.config} />
  )
}

export default SanityStudio
