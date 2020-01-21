import React from "react"
import { createStore , applyMiddleware } from "redux"
import {Provider} from "react-redux"
import createSagaMiddleware from "redux-saga"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import AppRouter from "../components/Router/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import rootReducer from "../store/reducers"
import rootSaga from "../store/saga"

//Store configurations
const sagaMiddleware = createSagaMiddleware();
const store = createStore( rootReducer ,applyMiddleware( sagaMiddleware ));
sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#233B58',
        dark: '#000'
     },
     secondary: {
       main: '#4FB218',
     },
     common :{
         white :'#fff'
     },
     button :{
        white :'#fff'
     },
     text: {
        primary: "#000000",
        secondary: "#ffffff",
        variant1 :"#45B6FA" // blue
    },
    background: {
        default: "#ffffff"
        }
  },
  typography: { 
     useNextVariants: true
  }
});
const useStyles = makeStyles(theme => ({
    page: {
        width: '100%',
      }
  }));

const App = () => {
    const classes = useStyles();
    return (
        <Provider store={ store }>
            <MuiThemeProvider theme = { theme }>
                <Layout>
                    <SEO title="App" />
                        <div className = {classes.page}>
                            <AppRouter/>
                        </div>  
                </Layout>
            </MuiThemeProvider> 
        </Provider>
        
    )
}

export default App
