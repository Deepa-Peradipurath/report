import React from "react"
import { Link } from "gatsby"

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MuiThemeProvider theme = { theme }>
    <h1>UI-Admin Notification Report Landing Page</h1>
    <Link to="/page-2/">Go to page 2</Link>
    </MuiThemeProvider> 
    
  </Layout>
)

export default IndexPage
