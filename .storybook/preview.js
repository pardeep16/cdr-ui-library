import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  main: {
  },
  components:{
    Navigation:{
      'primary': '#053881',
      'secondary': '#07A0B4',
      'text': '#FFFFFF',
      'itemsMargin':'220px'
    }
  }
  

};


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];