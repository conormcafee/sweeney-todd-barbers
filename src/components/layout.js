import React from "react"
import { Normalize } from 'styled-normalize'
import { StaticQuery, graphql } from "gatsby"
import {GlobalStyle} from "../globals/styles";

// import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Normalize />
        <GlobalStyle />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <>
          <main>{children}</main>
        </>
      </>
    )}
  />
)

export default Layout
