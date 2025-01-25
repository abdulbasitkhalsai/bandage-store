import { createClient, type ClientConfig } from 'next-sanity'

const SanityClient: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-12-22",
    useCdn: false,
}

export default createClient(SanityClient);
