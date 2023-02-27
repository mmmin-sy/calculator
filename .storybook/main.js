module.exports = {
    addons: ['@storybook/addon-essentials'],
    babel: async (options) => ({
      // Update your babel configuration here
      ...options,
    }),
    framework: '@storybook/react',
    stories: ['../components/**/*.stories.@(tsx)'],
    webpackFinal: async (config, { configType }) => {
      return config;
    },
  };