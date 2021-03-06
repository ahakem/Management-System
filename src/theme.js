import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
    h5:{
      fontSize:18,
    }
  },
  palette: {
    primary: {
      main: '#4D7CFE',
    },
    secondary: {
      main: '#778CA2',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F8FAFB',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform:"none",
        fontWeight:"normal",
        height:46,
        fontWeight:400,
      },
      outlined:{
        background:"#fff",
        color:'#778CA2',
      }
    },
   
    MuiInputLabel:{
      root:{  
        fontSize: 14,     
        position: "static !important",
        transform: "translate(0, 0) scale(1) !important",
        color:"#778CA2"
      }
    }
  },
});

export default theme;
