interface PingEffectOptions {
  effectClass?: string;
  scaleMultiplier?: number;
  refreshRate?: number;
}

declare global {
  interface Window {
    configurePingEffects: (options: PingEffectOptions) => void;
  }
}
