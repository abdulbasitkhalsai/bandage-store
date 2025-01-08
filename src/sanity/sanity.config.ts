import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";


const SanityCOnfig = defineConfig({
    name: "default",
    title: "Bandage Store",
    projectId: "kt1ejdfv",
    plugins: [structureTool(), visionTool()],
    dataset: "production",
    basePath: ".studio",
    schema: {
        types: schemaTypes
    }
    
})

