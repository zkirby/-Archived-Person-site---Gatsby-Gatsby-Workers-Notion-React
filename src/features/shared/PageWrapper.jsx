import React from "react"
import ReactGA from "react-ga"

const PageWrapper = ({ children, className = "", pageName }) => {
  ReactGA.pageview(pageName)
  return <div className={`page-wrapper ${className}`}>{children}</div>
}

export default PageWrapper
