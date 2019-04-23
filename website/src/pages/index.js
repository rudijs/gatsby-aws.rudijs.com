import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

function IndexPage() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link to="/about">About Us</Link>
    </Layout>
  )
}

export default IndexPage
