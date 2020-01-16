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

const useStyles = makeStyles(theme => ({
    page: {
        width: '100%',
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
