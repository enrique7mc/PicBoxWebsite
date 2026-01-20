/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WAITLIST_ID: string;
  readonly VITE_WAITLIST_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
