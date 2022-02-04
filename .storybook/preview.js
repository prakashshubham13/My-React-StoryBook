import {addDecorator} from '@storybook/react';
import Center from '../src/components/Center/Center';

addDecorator(story => <Center>{story()}</Center>)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) => a[0].localeCompare(b[0])
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}