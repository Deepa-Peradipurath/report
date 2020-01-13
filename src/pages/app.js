import React from "react"
//import { Link } from "gatsby"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import { makeStyles } from '@material-ui/core/styles';

import AppRouter from "../components/Router/index";
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
    page: {
        width: '100%',
        //backgroundColor :'#cfd8dc'
      }
  }));
const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: 'rgb(15, 54, 84)',
        dark: '#000'
     },
     secondary: {
       main: '#f44336',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

const App = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme = { theme }>
            <Layout>
                <SEO title="App" />
                    <div className = {classes.page}>
                        <AppRouter/>
                    </div>  
            </Layout>
        </MuiThemeProvider> 
    )
}

export default App
