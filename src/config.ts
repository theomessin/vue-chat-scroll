/**
 * This interface defines the config for the v-chat-scroll directive.
 */
export interface Config {
  enabled: boolean,
  handlePrepend: boolean,
};

/**
 * This object defines the default config for the directive.
 */
export const defaultConfig: Config = {
  enabled: true,
  handlePrepend: false,
};
