import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

/*
Using AWS Cloudfront in front of AWS S3 configure Cloudfront to use /404.html (gatsby generated file)
If there's a valid route in the URL on page load, there's a flash of HTML from the 404.html page before
the React router kicks in and routes to the component (dunno why)
To work around this, add a slight delay before showing content (see the setTimeout below)
If the route is truly 404, the content will show.
*/
export class NotFoundPage extends Component {
  state = {
    content: "",
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        content: (
          <Layout>
            <h1>Page Not Found</h1>
            <Link to="/">Home</Link>
          </Layout>
        ),
      })
    }, 2000)
  }

  render() {
    return this.state.content
  }
}

export default NotFoundPage
