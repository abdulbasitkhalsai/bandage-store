import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";


export const SanityCOnfig = defineConfig({
    name: "default",
    title: "Bandage Store",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    plugins: [structureTool(), visionTool()],
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
    schema: {
        types: schemaTypes
    },
    
})

