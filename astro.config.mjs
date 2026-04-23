// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://luisenrique.dev",
    compressHTML: true,
    integrations: [
        icon({
            include: {
                lucide: ["*"],
            },
        }),
    ],
    build: {
        inlineStylesheets: "auto",
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ["legacy-js-api"],
                },
            },
        },
    },
});
