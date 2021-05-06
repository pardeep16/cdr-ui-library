import './App.css';
import themes from './themes/index'
import {ThemeProvider} from 'styled-components';



function App(props) {

  return (
    <ThemeProvider theme={themes}>
    </ThemeProvider>
  );
}

export default App;
