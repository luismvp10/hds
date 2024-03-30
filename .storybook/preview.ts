import { themes } from '@storybook/theming';
import { Preview } from '@storybook/web-components';
import { defineCustomElements } from '../loader';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      default: 'hunab',
    },
  },
};

export default preview;
