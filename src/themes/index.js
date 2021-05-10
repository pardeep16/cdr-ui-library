import colors from './colors';
import fontWeights from './fontWeights';
import sizes from './sizes';

const theme = {
  main: {
    colors,
    fontWeights,
    sizes,
  },
  components:{
    Navigation:{
      'primary': '#053881',
      'secondary': '#07A0B4',
      'text': '#FFFFFF',
      'itemsMargin':'220px'
    },
    Card:{
      CardTitle:{
        'size':'12px',
        
      }
    }
  },
  font:['Roboto']
  

};

export default theme;
