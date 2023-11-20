import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { inject } from '@vercel/analytics';

import Seo from "../components/seo"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`)

  const siteUrl = data.site.siteMetadata.siteUrl
  inject();
  return <>
    <h1>Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>Here are some things you can do:</p>
    <ul>
      <li>Check the URL to make sure it is correct.</li>
      <li>Try searching for the page using the search bar at the top of the page.</li>
      <li>Go back to the main site by clicking the link below.</li>
    </ul>
    <a href={`${siteUrl}/`}>Go back to the main site</a>
  </>
}

export const Head = () => <Seo title="404 Error" />

export default NotFoundPage
