import { createClient, type ClientConfig } from 'next-sanity'

const SanityClient: ClientConfig = {
    projectId: "syq2w7mv",
    // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-12-22",
    useCdn: false
}

export default createClient(SanityClient);