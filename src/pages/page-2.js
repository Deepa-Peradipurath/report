import React from "react"
import { Link } from "gatsby"
import {Provider} from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { store } from "../store" 

const SecondPage = () => (
  <Provider store={ store }>
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Provider>
  
)

export default SecondPage
