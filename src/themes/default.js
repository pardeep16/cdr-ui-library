import colors from './colors';
import fontWeights from './fontWeights';
import sizes from './sizes';

export const original = {
    name:'Original',
    main: {
      font:['Roboto'],
      colors,
      fontWeights,
      sizes
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
          styles:{
            //css ovveride
          }
        },
        CardBody:{
  
        },
       
      }
    },
    
  };


  export const customize = {
    name:'Customize',
    main: {
      font:['Roboto'],
      colors,
      fontWeights,
      sizes
    },
    components:{
      Navigation:{
        'primary': colors.white,
        'secondary': colors.black,
        'text': colors.black,
        'itemsMargin':'150px'
      },
      Card:{
        CardTitle:{
          styles:`{
            font-size: 1.125rem;
            line-height:1.4;
            color: ${colors.black};
            font-weight: 700;
            margin:0 0 0.5rem 0;
          }`
        },
        CardBody:{
            
        },
        CardHeader:{
            styles:{
                'font-size':'1rem',
                'border-bottom':'none'
            }
        }
      }
    },
    
  };