import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import {addDecorator} from '@storybook/react'
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import {original,customize} from '../src/themes/default';

const themes=[
  original,customize
]





export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ];

addDecorator(withThemesProvider(themes),ThemeProvider)