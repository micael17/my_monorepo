import type { Preview } from "@storybook/vue3";
import '../src/assets/index.css'  // tailwind css 파일

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
