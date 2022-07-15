/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MOVIES_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}