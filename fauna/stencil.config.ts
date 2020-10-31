import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'fauna',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },

    {
      type: 'dist-hydrate-script'
    },

    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
