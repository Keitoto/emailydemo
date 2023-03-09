interface ImportMetaEnv {
  readonly VITE_STRIPE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
