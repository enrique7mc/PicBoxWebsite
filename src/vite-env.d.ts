/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WAITLIST_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
