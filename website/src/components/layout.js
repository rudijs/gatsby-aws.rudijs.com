import React from "react"

import "../styles/bootstrap.min.css"

import Header from "./header"

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="container">{props.children}</div>
    </div>
  )
}

export default Layout
