import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

const isServer = typeof window === "undefined";

export const SanityConfig = defineConfig({
    name: "default",
    title: "Bandage Store",
    projectId: "syq2w7mv",
    plugins: [structureTool(), visionTool()],
    dataset: "production",
    basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
    schema: {
        types: schemaTypes
    },
    api: {
        token: process.env.SANITY_API_TOKEN || "" , // Only include the token on the server
        useCdn: !isServer // Use CDN for faster reads but not for server-side mutations
    }
    
})
